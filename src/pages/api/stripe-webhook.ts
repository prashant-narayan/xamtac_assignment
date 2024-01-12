import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { env } from "~/env.js";
import { buffer } from "micro";
import { db } from "~/server/db";

interface CheckoutSessionCompleted {
  id: string;
  metadata: {
    type: string;
    data: OrderData;
  };
  customer_details: {
    address: {
      city: string;
      country: string;
      line1: string;
      line2: string;
      postal_code: string;
      state: string;
    };
    email: string;
    name: string;
    phone: number | null;
    tax_exempt: string;
  };
}

interface OrderData {
  userId: string;
  cart: {
    id: number;
    title: string;
    price: number;
    image: string;
    quantity: number;
  }[];
}
const stripe = new Stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});
export const config = {
  api: {
    bodyParser: false,
  },
};
const webhook = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === "POST") {
    const buf = await buffer(req);
    const sig = req.headers["stripe-signature"] as string;

    let event;

    try {
      event = stripe.webhooks.constructEvent(
        buf,
        sig,
        env.STRIPE_WEB_HOOK_SECRET,
      );
    } catch (err) {
      let message = "Unknown error";
      if (err instanceof Error) message = err.message;
      res.status(400).send(`Webhook Error: ${message}`);
      return;
    }
    switch (event.type) {
      case "checkout.session.completed":
        const checkoutSessionCompleted = event.data
          .object as unknown as CheckoutSessionCompleted;
        if (checkoutSessionCompleted.metadata.type === "order") {
          const parsedData: OrderData = JSON.parse(
            checkoutSessionCompleted.metadata.data as unknown as string,
          ) as OrderData;
          const { cart, userId } = parsedData;
          await db.order.create({
            data: {
              products: cart,
              userId,
              shippingDetail: checkoutSessionCompleted.customer_details,
            },
          });
          res.status(200).send("Order created");
        }
        break;
      default:
        console.log(`Unhandled event type ${event.type}`);
    }

    res.json({ received: true });
  } else {
    res.setHeader("Allow", "POST");
    res.status(405).send("Method Not Allowed");
  }
};
export default webhook;

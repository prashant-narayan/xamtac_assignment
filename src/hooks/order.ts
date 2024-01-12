/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-call */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import { loadStripe } from "@stripe/stripe-js";
import { env } from "~/env";
import { api } from "~/utils/api";
const stripePromise = loadStripe(env.NEXT_PUBLIC_STRIPE_KEY);

export const useCreateOrder = () => {
  const userCheckout = api.order.createOrder.useMutation();
  return {
    orderPayment: async ({
      cart,
    }: {
      cart: {
        id: number;
        title: string;
        price: number;
        image: string;
        quantity: number;
      }[];
    }) => {
      console.log(cart, "Hooks");
      const response = await userCheckout.mutateAsync({
        cart,
      });
      const stripe = await stripePromise;
      if (!stripe) throw new Error("Stripe is not loaded");
      //@ts-expect-error stripe is not null
      if (response?.code === "ORDER_PAYMENT_COMPLETED") {
        return response;
      }
      return await stripe?.redirectToCheckout({
        sessionId: response.id,
      });
    },
  };
};

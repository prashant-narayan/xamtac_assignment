import _stripe from "stripe";
import { z } from "zod";
import { createTRPCRouter, protectedProcedure } from "~/server/api/trpc";
import { env } from "~/env";
const stripe = new _stripe(env.STRIPE_SECRET_KEY, {
  apiVersion: "2023-10-16",
});

export const orderRouter = createTRPCRouter({
  createOrder: protectedProcedure
    .input(
      z.object({
        cart: z
          .object({
            id: z.number(),
            title: z.string(),
            price: z.number(),
            image: z.string(),
            quantity: z.number(),
          })
          .array(),
      }),
    )
    .mutation(async ({ ctx, input }) => {
      return await stripe.checkout.sessions.create({
        payment_method_types: [],
        metadata: {
          type: "order",
          data: JSON.stringify({
            cart: input.cart,
            userId: ctx.session.user.id,
          }),
        },
        mode: "payment",
        line_items: input.cart.map((item) => ({
          price_data: {
            currency: "usd",
            product_data: {
              name: item.title,
            },
            unit_amount: item.price * 100,
          },
          quantity: item.quantity,
        })),
        shipping_address_collection: {
          allowed_countries: ["US"],
        },
        success_url: `${
          env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
        }/payment/success`,
        cancel_url: `${
          env.NEXT_PUBLIC_SITE_URL ?? "http://localhost:3000"
        }/payment/cancel`,
      });
    }),
  getAllOrders: protectedProcedure.query(async ({ ctx }) => {
    return await ctx.db.order.findMany({
      where: {
        userId: ctx.session.user.id,
      },
    });
  }),
  getSingleOrder: protectedProcedure
    .input(
      z.object({
        id: z.string(),
      }),
    )
    .query(async ({ ctx, input }) => {
      return await ctx.db.order.findUnique({
        where: {
          id: input.id,
        },
      });
    }),
});

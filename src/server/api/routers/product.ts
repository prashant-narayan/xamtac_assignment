import { TRPCClientError } from "@trpc/client";
import { z } from "zod";

import { createTRPCRouter, publicProcedure } from "~/server/api/trpc";

export const productRouter = createTRPCRouter({
  getAllProducts: publicProcedure.query(async () => {
    const res = await fetch("https://fakestoreapi.com/products");
    if (!res.ok) {
      throw new TRPCClientError("Oops! Something went wrong.");
    }
    const data = res.json();
    return data as Promise<
      {
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
      }[]
    >;
  }),
  getProductById: publicProcedure
    .input(z.object({ id: z.string() }))
    .query(async ({ input }) => {
      const res = await fetch(`https://fakestoreapi.com/products/${input.id}`);
      if (!res.ok) {
        throw new TRPCClientError("Oops! Something went wrong.");
      }
      const data = res.json();
      return data as Promise<{
        id: number;
        title: string;
        price: number;
        description: string;
        category: string;
        image: string;
      }>;
    }),
});

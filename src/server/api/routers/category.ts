import { TRPCClientError } from "@trpc/client";
import { createTRPCRouter, publicProcedure } from "../trpc";

export const categoryRouter = createTRPCRouter({
    getAllcategory:publicProcedure
    .query(async() => {
        const res =   await fetch('https://fakestoreapi.com/products/categories')
            if(!res.ok){
                throw new TRPCClientError("Oops! Something went wrong.")
            }
            const data = res.json()
      return data;
    }),
});
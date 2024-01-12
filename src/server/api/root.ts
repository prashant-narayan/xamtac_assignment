import { createTRPCRouter } from "~/server/api/trpc";
import { productRouter } from "./routers/product";
import { orderRouter } from "./routers/order";

export const appRouter = createTRPCRouter({
  product: productRouter,
  order: orderRouter,
});

export type AppRouter = typeof appRouter;

import { Context, Next } from "koa";
import KoaRouter from "@koa/router";

export const getRouteLanding = async (ctx: Context, next: Next) => {
  ctx.body = {
    success: true,
    message: "Hello World",
  };

  await next();
};

export const registerLandingRoutes = (router: KoaRouter): void => {
  router.get("/", getRouteLanding);
};

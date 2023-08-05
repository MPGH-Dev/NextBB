import { registerLandingRoutes } from "./landing";
import KoaRouter from "@koa/router";

export const registerRoutes = (router: KoaRouter): void => {
  registerLandingRoutes(router);
};

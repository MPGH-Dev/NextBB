import {
  ConfigurationOptions,
  getConfigOption,
  getConfigOptionNumber,
  validateConfig,
} from "./config";
import { registerRoutes } from "./routes";

import Koa from "koa";
import KoaRouter from "@koa/router";

const validateConfigProcedure = () => {
  if (process.env?.SKIP_ENV_VALIDATION === "true") {
    return;
  }

  if (!validateConfig()) {
    throw new Error("Mandatory configuration options are missing.");
  }
};

const main = async () => {
  validateConfigProcedure();

  const app = new Koa();

  const routerConfig: KoaRouter.RouterOptions = {
    prefix: getConfigOption(ConfigurationOptions.PathPrefix),
  };

  const router = new KoaRouter(routerConfig);

  registerRoutes(router);

  app.use(router.routes()).use(router.allowedMethods());

  app.listen(getConfigOptionNumber(ConfigurationOptions.Port));
};

main().catch(console.error);

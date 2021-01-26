import express, { Express } from "express";

import InitializeMiddleWare from "@core/InitializeMiddleware";
import InitializeRoutes from "@core/InitializeRoutes";

import Config from "@config/Config";

export default async function server(): Promise<Express> {
  const app: Express = express();

  const host = Config.HOST;
  const port = Config.PORT;

  await InitializeMiddleWare.InitializeCommonMiddleware(app);
  await InitializeRoutes.Initialize(app);
  await InitializeMiddleWare.InitializeErrorHandlingMiddleware(app);

  const link = "http://" + host + ":" + port.toString();
  app.listen(port, host, () => {
    console.log(`Server started on: ${link}`);
  });

  return Promise.resolve(app);
}

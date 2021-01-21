import { Express, Response, Request } from "express";

import StatusConstants from "@constants/StatusConstants";

export default class ErrorHandlingMiddleware {
  app: Express;

  constructor(_app: Express) {
    this.app = _app;
  }

  public async handle404Error() {
    this.app.use((req: Request, resp: Response) => {
      resp.status(StatusConstants.code404).send(StatusConstants.code404Message);
    });
  }
}

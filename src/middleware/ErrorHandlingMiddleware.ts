import { Express, Response, Request, NextFunction } from "express";

import StatusConstants from "@constants/StatusConstants";
import { ApiException } from "@src/utils/exceptions/ApiException";
import ErrorCodes from "@constants/ErrorCodes";

export default class ErrorHandlingMiddleware {
  app: Express;

  constructor(_app: Express) {
    this.app = _app;
  }

  public async handle404Error() {
    this.app.use((req: Request, res: Response) => {
      return res.status(StatusConstants.code404).send(StatusConstants.code404Message);
    });
  }

  public async handle500Error() {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    this.app.use((err: any, req: Request, res: Response, next: NextFunction) => {
      res.status(err.errorCode || StatusConstants.code500).send("Something broke!");
    });
  }
}

import { Express } from "express";
import CommonMiddleware from "@middleware/CommonMiddleware";
import ErrorHandlingMiddleware from "@middleware/ErrorHandlingMiddleware";

export default class InitializeMiddleWare {
  // Initialize middleware to be shared on all routes
  public static async InitializeCommonMiddleware(app: Express) {
    const middleware = new CommonMiddleware(app);

    await middleware.useBodyParser();
    await middleware.useURLEncoded();
    await middleware.useCors();
  }

  // Initialize error handling middleware on all routes
  public static async InitializeErrorHandlingMiddleware(app: Express) {
    const errorMiddleware = new ErrorHandlingMiddleware(app);

    await errorMiddleware.handle404Error();
    await errorMiddleware.handle500Error();
  }
}

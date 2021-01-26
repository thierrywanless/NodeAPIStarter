import { NextFunction, Request, Response } from "express";
import { Schema } from "express-validator";

/**
 * Abstract implementation of controller class
 * Ensures all controllers implement the same structure and logic
 */
export default abstract class AbstractRouteController {
  public abstract exec(req: Request, res: Response, next: NextFunction): Promise<any>;

  /**
   * Override to provide a validation to controller input
   * Refer to: https://express-validator.github.io/docs/schema-validation.html
   * For schema validation format
   */
  public validationSchema(): Schema {
    return {};
  }

  // Wrapper to catch errors and pass them to middleware (via next)
  runService(req: Request, res: Response, next: NextFunction): any {
    this.exec(req, res, next).catch((err: any) => {
      next(err);
    });
  }
}

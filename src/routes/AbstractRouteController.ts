import { NextFunction, Request, Response } from "express";

/**
 * Abstract implementation of controller class
 * Ensures all controllers implement the same structure and logic
 */
export default abstract class AbstractRouteController {
  public abstract exec(req: Request, res: Response, next: NextFunction): Promise<any>;

  // Wrapper to catch errors and pass them to middleware (via next)
  runService(req: Request, res: Response, next: NextFunction): any {
    this.exec(req, res, next).catch((err: any) => {
      next(err);
    });
  }
}

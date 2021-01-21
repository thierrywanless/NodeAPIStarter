import { Request, Response } from "express";

/**
 * Abstract implementation of controller class
 * Ensures all controllers implement the same structure and logic
 */
export default abstract class AbstractRouteController {
  public abstract runService(req: Request, res: Response): Promise<any>;
}

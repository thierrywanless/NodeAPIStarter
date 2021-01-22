import { Request, Response, NextFunction } from "express";

/**
 * Dynamic Middleware which can be applied to individual routes
 */

// Example Middleware format that is accepted by Express.js
export async function logRequest(req: Request, res: Response, next: NextFunction) {
  console.info("Endpoint hit!");

  next();
}

import { Request, Response, NextFunction } from "express";
import RouteMethods from "@constants/RouteMethods";
import AbstractRouteController from "@routes/AbstractRouteController";

// Used by the router to configure application routes
type RouteMapType = {
  //Path
  [key: string]: {
    // Get, put, post, delete
    [method in RouteMethods]?: {
      // Controller for route
      controller: AbstractRouteController;
      // List of middleware to applied to specific route (in order)
      middleware: ((req: Request, res: Response, next: NextFunction) => any)[];
    };
  };
};

export default RouteMapType;

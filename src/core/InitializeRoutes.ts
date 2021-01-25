import { Express, Router } from "express";

import UserRoutes from "@routes/user/UserRoutes";

export default class InitializeRoutes {
  // Initialize app routing from base url ".../"
  public static async Initialize(app: Express) {
    const router = await this.initializeRouter();

    app.use("/", router);
  }

  // Initialize router and populate with app routes
  public static async initializeRouter(): Promise<Router> {
    const router = Router();

    const routes = { ...UserRoutes };

    for (const path in routes) {
      const pathMethods = routes[path];

      if (pathMethods.get) {
        const routeComponents = pathMethods.get;
        router
          .get(path, routeComponents.middleware, routeComponents.controller.runService.bind(routeComponents.controller))
          .bind(routeComponents.controller);
      }

      if (pathMethods.put) {
        const routeComponents = pathMethods.put;
        router
          .put(path, routeComponents.middleware, routeComponents.controller.runService.bind(routeComponents.controller))
          .bind(routeComponents.controller);
      }

      if (pathMethods.post) {
        const routeComponents = pathMethods.post;
        router
          .post(
            path,
            routeComponents.middleware,
            routeComponents.controller.runService.bind(routeComponents.controller),
          )
          .bind(routeComponents.controller);
      }

      if (pathMethods.delete) {
        const routeComponents = pathMethods.delete;
        router
          .delete(
            path,
            routeComponents.middleware,
            routeComponents.controller.runService.bind(routeComponents.controller),
          )
          .bind(routeComponents.controller);
      }
    }

    return router;
  }
}

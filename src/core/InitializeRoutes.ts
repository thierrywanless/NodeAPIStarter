import { Express, Router } from "express";

import UserRoutes from "@routes/user/UserRoutes";
import { checkSchema } from "express-validator";

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
        const routeComponent = pathMethods.get;
        const schema = routeComponent.controller.validationSchema();
        router
          .get(
            path,
            routeComponent.middleware,
            checkSchema(schema),
            routeComponent.controller.runService.bind(routeComponent.controller),
          )
          .bind(routeComponent.controller);
      }

      if (pathMethods.put) {
        const routeComponent = pathMethods.put;
        const schema = routeComponent.controller.validationSchema();
        router
          .put(
            path,
            routeComponent.middleware,
            checkSchema(schema),
            routeComponent.controller.runService.bind(routeComponent.controller),
          )
          .bind(routeComponent.controller);
      }

      if (pathMethods.post) {
        const routeComponent = pathMethods.post;
        const schema = routeComponent.controller.validationSchema();
        router
          .post(
            path,
            routeComponent.middleware,
            checkSchema(schema),
            routeComponent.controller.runService.bind(routeComponent.controller),
          )
          .bind(routeComponent.controller);
      }

      if (pathMethods.delete) {
        const routeComponent = pathMethods.delete;
        const schema = routeComponent.controller.validationSchema();
        router
          .delete(
            path,
            routeComponent.middleware,
            checkSchema(schema),
            routeComponent.controller.runService.bind(routeComponent.controller),
          )
          .bind(routeComponent.controller);
      }
    }

    return router;
  }
}

import RouteMapType from "@domainTypes/RouteMapType";
import GetUserController from "@routes/user/GetUserController";
import { logRequest } from "@middleware/DynamicMiddleware";

// Contains router mappings for user routes
const routerMap: RouteMapType = {
  "/user": {
    get: {
      controller: new GetUserController(),
      middleware: [logRequest],
    },
  },
};

export default routerMap;

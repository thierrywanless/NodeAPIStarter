import { Response, Request } from "express";

import AbstractRouteController from "../AbstractRouteController";
import UserService from "@services/UserService";
import StatusConstants from "@constants/StatusConstants";

// Example format for Controller
export default class GetUserController extends AbstractRouteController {
  public async exec(req: Request, resp: Response): Promise<any> {
    const response = await UserService.getUser(Number(req.params.userId));

    resp.status(StatusConstants.code200).send(response);
  }
}

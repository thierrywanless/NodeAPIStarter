import ErrorCodes from "@constants/ErrorCodes";
import User from "@models/User.model";
import { UserRepository } from "@repositories";
import { ApiException } from "@src/utils/exceptions/ApiException";

/**
 * Example Service
 *
 * Contains business logic
 */
export default class UserService {
  public static async getUser(userId: number): Promise<User> {
    const user = await UserRepository.getById(userId);
    if (user === null || user.id !== userId) {
      throw new ApiException("Invalid user", ErrorCodes.UserDoesNotExist);
    }

    return user;
  }
}

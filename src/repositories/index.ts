import { AppDatabase } from "@src/index";

import UserRepository from "./UserRepository";
import User from "@models/User.model";

const UserRepo = AppDatabase.getRepository(User);

const userRepository = new UserRepository(UserRepo);

export { userRepository as UserRepository };

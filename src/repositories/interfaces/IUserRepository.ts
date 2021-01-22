import User from "@models/User.model";
import IRepository from "./IRepository";

export interface IAccountRepository extends IRepository<User> {}

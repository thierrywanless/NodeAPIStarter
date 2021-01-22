import { Repository } from "sequelize-typescript";

import User from "@models/User.model";
import IUserRepository from "./interfaces/IRepository";
import { DatabaseException } from "@src/utils/exceptions/DatabaseException";

export default class UserRepository implements IUserRepository<User> {
  private userRepo: Repository<User>;

  constructor(userRepo: Repository<User>) {
    this.userRepo = userRepo;
  }

  async exists(user: User): Promise<boolean> {
    const result = await this.userRepo.findOne({
      where: { id: user.id },
    });
    return !!result === true;
  }

  async delete(user: User): Promise<any> {
    return await this.userRepo.destroy({
      where: { id: user.id },
    });
  }

  async save(user: User): Promise<User> {
    const exists = await this.exists(user);

    if (exists) {
      const result = await this.userRepo.update(user, { where: { id: user.id }, limit: 1 });
      return result[1][0];
    } else {
      return await this.userRepo.create(user);
    }
  }

  async getById(id: number): Promise<User> {
    const result = await this.userRepo.findByPk(id);
    if (result === null) {
      throw new DatabaseException();
    } else {
      return result;
    }
  }
}

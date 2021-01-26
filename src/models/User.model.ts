import { Model, Table, Column, PrimaryKey, IsEmail, Unique, AutoIncrement } from "sequelize-typescript";

@Table
export default class User extends Model implements IUser {
  @PrimaryKey
  @AutoIncrement
  @Column
  public readonly id!: number;

  @IsEmail
  @Unique
  @Column
  public email!: string;
}

export interface IUser {
  id: number;
  email: string;
}

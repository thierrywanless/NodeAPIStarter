import { Model, Table, Column, PrimaryKey, IsEmail, Unique, AutoIncrement } from "sequelize-typescript";

@Table
export default class User extends Model<User> {
  @PrimaryKey
  @AutoIncrement
  @Column
  public readonly id!: number;

  @IsEmail
  @Unique
  @Column
  public email: string = "";
}

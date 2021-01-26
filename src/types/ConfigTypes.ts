import { Dialect } from "sequelize/types";

export type ConfigType = {
  ENV: string;
  ROOT: string;
  PORT: number;
  HOST: string;
  DB_NAME: string;
  DB_USER: string;
  DB_PASSWORD: string;
  DB_HOST: string;
  DB_PORT: number;
  DB_LOGGING: boolean;
  DATABASE_CONNECTION: DbConfigType;
};

export type DbConfigType = {
  username?: string;
  password?: string;
  database?: string;
  host?: string;
  port?: number;
  dialect?: Dialect;
  define?: {
    charset: string;
    collate: string;
  };
  logging?: boolean;
  seederStorage?: string;
};

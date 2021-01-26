import * as path from "path";
import * as dotenv from "dotenv-safe";

import dbConfig from "@config/DatabaseConfig";
import Environments from "@constants/Environments";
import { getEnumKeyByEnumValue } from "@src/utils/helpers/EnumHelpers";
import { ConfigType } from "@domainTypes/ConfigTypes";

// If not on production environment, load config from the .env file
if (process.env.NODE_ENV !== "prod") {
  dotenv.config({
    path: path.join(__dirname, "../../.env"),
    sample: path.join(__dirname, "../../.env.example"),
  });
}

/**
 * Config variables are loaded for the application here
 */
const env: Environments =
  Environments[getEnumKeyByEnumValue(Environments, process.env.NODE_ENV) as keyof typeof Environments];
const config: ConfigType = {
  ROOT: path.join(__dirname, "../.."),
  ENV: env, // dev, prod, test
  PORT: Number(process.env.PORT) || 8080,
  HOST: process.env.HOST || "localhost",
  DB_NAME: process.env.DB_NAME || "server-database",
  DB_USER: process.env.DB_USER || "user",
  DB_PASSWORD: process.env.DB_PASSWORD || "password",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  DB_LOGGING: Boolean(process.env.DB_LOGGING) || true,
  // Sequelize connection
  DATABASE_CONNECTION: dbConfig[env],
};

export default config;

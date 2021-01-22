import * as path from "path";
import * as dotenv from "dotenv-safe";

// If not on production environment, load config from the .env file
if (process.env.NODE_ENV !== "prod") {
  dotenv.config({
    path: path.join(__dirname, "../../.env"),
    sample: path.join(__dirname, "../../.env.example"),
  });
}

type ConfigType = {
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
};

/**
 * Config variables are loaded for the application here
 */
const config: ConfigType = {
  ROOT: path.join(__dirname, "../.."),
  ENV: process.env.NODE_ENV || "dev", // dev, prod, test
  PORT: Number(process.env.PORT) || 8080,
  HOST: process.env.HOST || "localhost",
  DB_NAME: process.env.DB_NAME || "server-database",
  DB_USER: process.env.DB_USER || "user",
  DB_PASSWORD: process.env.DB_PASSWORD || "password",
  DB_HOST: process.env.DB_HOST || "localhost",
  DB_PORT: Number(process.env.DB_PORT) || 5432,
  DB_LOGGING: Boolean(process.env.DB_LOGGING) || true,
};

export default config;

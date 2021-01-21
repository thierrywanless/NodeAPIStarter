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
};

/**
 * Config variables are loaded for the application here
 */
const config: ConfigType = {
  ROOT: path.join(__dirname, "../.."),
  ENV: process.env.NODE_ENV || "dev",
  PORT: Number(process.env.PORT) || 8080,
  HOST: process.env.HOST || "localhost",
};

export default config;

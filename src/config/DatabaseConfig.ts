/**
 * File must not use import / export as used by migration scripts
 */
const path = require("path");
const dotenv = require("dotenv-safe");

if (process.env.NODE_ENV !== "prod") {
  dotenv.config({
    allowEmptyValues: true,
    path: path.join(__dirname, "../../.env"),
    sample: path.join(__dirname, "../../.env.example"),
  });
}

module.exports = {
  dev: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
    define: {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    },
    logging: Boolean(process.env.DB_LOGGING),
    seederStorage: "sequelize",
  },
  test: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
    define: {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    },
    logging: Boolean(process.env.DB_LOGGING),
    seederStorage: "sequelize",
  },
  prod: {
    username: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME,
    host: process.env.DB_HOST,
    port: Number(process.env.DB_PORT),
    dialect: "postgres",
    define: {
      charset: "utf8",
      collate: "utf8_unicode_ci",
    },
    logging: Boolean(process.env.DB_LOGGING),
    seederStorage: "sequelize",
  },
};

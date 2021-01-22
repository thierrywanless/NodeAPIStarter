import { Sequelize } from "sequelize-typescript";
import { join } from "path";

import Config from "@core/Config";

const sequelizeConnection = new Sequelize({
  dialect: "postgres",
  database: Config.DB_NAME,
  username: Config.DB_USER,
  password: Config.DB_PASSWORD,
  host: Config.DB_HOST,
  port: Config.DB_PORT,
  logging: (msg) => {
    if (Config.DB_LOGGING) {
      return console.log(msg);
    } else {
      return false;
    }
  },
  repositoryMode: true,
  models: [join(__dirname + "/../models/**/*.model.{js, ts}")],
  modelMatch: (filename, member) => {
    return filename.substring(0, filename.indexOf(".model")).toLowerCase() === member.toLowerCase();
  },
});

sequelizeConnection
  .authenticate()
  .then(() => {
    console.info("DB connected!");
  })
  .catch((err) => {
    console.error("Unable to connect to database:", err);
  });

export default sequelizeConnection;

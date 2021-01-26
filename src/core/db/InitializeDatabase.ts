import { Sequelize } from "sequelize-typescript";
import { join } from "path";

import Config from "@config/Config";

const dbCon = Config.DATABASE_CONNECTION;
const sequelizeConnection = new Sequelize({
  dialect: dbCon.dialect,
  database: dbCon.database,
  username: dbCon.username,
  password: dbCon.password,
  host: dbCon.host,
  port: dbCon.port,
  logging: (msg) => {
    if (dbCon.logging) {
      return console.log(msg);
    } else {
      return false;
    }
  },
  repositoryMode: true,
  models: [join(__dirname + "/../../models/**/*.model.{js, ts}")],
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

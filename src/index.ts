require("module-alias/register");

import InitializeDatabase from "@core/InitializeDatabase";

const AppDatabase = InitializeDatabase;

// Must be imported after database is initialized
import InitializeServer from "@core/InitializeServer";

const AppServer = InitializeServer();

export { AppDatabase, AppServer };

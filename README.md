# NodeAPIStarter
A starter format for Node.js APIs using Express.

## Features:
1. TypeScript
2. Prettier/ESLint
3. Mocha & Chai
4. Sequelize (default configured for PostgreSQL)

## Setup

1. Fork/clone/Use this template to get the starter code
2. Update `package.json` metadata for your project
3. Add environment variables to a `.env` file (`.env.example` shows the starter configuration variables)
4. Run `yarn/npm install`
5. Finally run `yarn/npm run develop` for live reloading of server, or `yarn/npm run build` followed by `yarn/npm run start` for production

## Project structure

    .
    ├── build                   # Compiled files
    ├── build-migrations        # Compiled files for database migrations
    ├── build-seeders           # Compiled files for database seeders
    ├── scripts                 # Compiled files for application scripts
    ├── src
    │   ├── config              # Global application config
    │   ├── constants           # Global application constants
    │   ├── core                # Core application logic (initializing server, middleware etc.)
    │   │    └── db                # Database specific logic
    │   ├── middleware          # Router middleware
    │   ├── models              # Database models
    │   ├── repositories        # Database access layer
    │   ├── routes              # Router routes
    │   ├── services            # Domain/Business logic layer
    │   ├── tests               # Test files
    │   ├── types               # Custom types
    │   ├── utils               # Helpers
    │   └── index.ts            # Main app entry 
    ├── .env                    # Environment variables (Do not commit this file to source control)
    ├── .env.example            # Example environment variables (commit this as a guide for others, never include real values)
    ├── .sequelizerc            # Sequelize-cli configuration paths
    └── README.md

### Layers

1. Controller/Route layer - Main entry into the API, handles request and response, including validation/sanitization
2. Service layer - Domain/Business logic
3. Repository layer - Database access layer (seperation of concern from the domain logic - allows database implementation to be changed without affecting the domain logic)


## Scripts

`migrate` - Runs database migrations

`migrate-rollback` - Runs database rollback (from previous migration)

`migration-generate` - Creates a new database migration skeleton

`seed` - Runs database seed

`seed-rollback` - Runs database seed rollback (from previous seed)

`seed-generate` - Creates a new database seed skeleton

Options: (add ` -- ` to start script options)
- Adding `-e {environment}` to the end of the script will use the corresponding environment configuration
- Adding `-a` to rollback scripts will rollback all migrations/seeds


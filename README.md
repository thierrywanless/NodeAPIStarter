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
    ├── build                   # Compiled files (alternatively `dist`)
    ├── src
    |   ├── constants           # Global application constants
    |   ├── core                # Core application logic (initializing server, database, middleware etc.)
    |   ├── middleware          # Router middleware
    |   ├── models              # Database models
    |   ├── repositories        # Database access layer
    |   ├── routes              # Router routes
    |   ├── services            # Domain/Business logic layer
    |   ├── tests               # Test files
    |   ├── types               # Custom types
    |   ├── utils               # Helpers
    |   └── index.ts            # Main app entry 
    ├── .env                    # Environment variables (Do not commit this file to source control)
    ├── .env.example            # Example environment variables (commit this as a guide for others, never include real values)
    └── README.md

### Layers

1. Controller/Route layer - Main entry into the API, handles request and response, including validation/sanitization
2. Service layer - Domain/Business logic
3. Repository layer - Database access layer (seperation of concern from the domain logic - allows database implementation to be changed without affecting the domain logic)

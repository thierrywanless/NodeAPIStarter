cat > ../src/core/db/migrations/$(date +"%Y_%m_%d")_$1.ts << EOF
import { QueryInterface } from "sequelize";
import { DataType } from "sequelize-typescript";

module.exports = {

    up: async (queryInterface: QueryInterface) => {
        // Write migration code here.
    },

    down: async (queryInterface: QueryInterface) => {
        // If migration fails, this will be called. Rollback your migration changes.
    }

};
EOF

read -p "Press enter to continue"
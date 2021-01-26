cat > ../src/core/db/seeders/$(date +"%Y_%m_%d")_$1.ts << EOF
import { QueryInterface } from "sequelize";

module.exports = {

    up: async (queryInterface: QueryInterface) => {
        // Write seeder here.
    },

    down: async (queryInterface: QueryInterface) => {
        // If seed fails or is rolled back, this will be called.
    }

};
EOF

read -p "Press enter to continue"
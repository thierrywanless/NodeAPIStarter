import { QueryInterface } from "sequelize";
import { DataType } from "sequelize-typescript";

module.exports = {
  up: async (queryInterface: QueryInterface) => {
    // Write migration code here.
    queryInterface.createTable("Users", {
      id: {
        type: DataType.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
      },
      email: {
        type: DataType.STRING,
        allowNull: false,
      },
      createdAt: {
        type: DataType.DATE,
        allowNull: false,
      },
      updatedAt: {
        type: DataType.DATE,
        allowNull: false,
      },
    });
  },

  down: async (queryInterface: QueryInterface) => {
    // If migration fails, this will be called. Rollback your migration changes.
    queryInterface.dropTable("users");
  },
};

"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("income", {
      id_income: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      income_statement: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      source_of_income: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      date_of_entry: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      income_amount: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createAttoken: Sequelize.DATE,
      updateAttoken: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("income");
  },
};

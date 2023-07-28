"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("expenditure", {
      id_expenditure: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      expenditure_statement: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      source_expenditure: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      out_date: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      expenditure_amount: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      createAttoken: Sequelize.DATE,
      updateAttoken: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("expenditure");
  },
};

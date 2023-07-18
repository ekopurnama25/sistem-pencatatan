"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("roles", {
      id_roles: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      id_users: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      roles: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createAtroles: Sequelize.DATE,
      updateAtroles: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("roles");
  },
};

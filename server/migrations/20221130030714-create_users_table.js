"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    queryInterface.createTable("users", {
      id_users: {
        type: Sequelize.UUID,
        defaultValue: Sequelize.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      username: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      email: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      password: {
        type: Sequelize.STRING,
        allowNull: true,
      },
      createAtusers: Sequelize.DATE,
      updateAtusers: Sequelize.DATE,
    });
  },

  async down(queryInterface, Sequelize) {
    queryInterface.dropTable("users");
  },
};

//=================================================================
//Untuk create migration
//terminal => sequelize migration:create --name create_users_table
//=================================================================

//=================================================================
//untuk create semua folder
//terminal => sequelize init
//================================================================

//=================================================================
//untuk table create kedatabase
//sequelize db:migrate
//=================================================================

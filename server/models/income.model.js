("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Income extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(models.Roles, {
      //   sourceKey: "id_users",
      //   foreignKey: "id_users",
      //   as: "Roles",
      // });
    }
  }
  Income.init(
    {
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
    },
    {
      sequelize,
      modelName: "Income",
    }
  );
  return Income;
};

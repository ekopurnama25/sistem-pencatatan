("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Expenditure extends Model {
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
  Expenditure.init(
    {
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
    },
    {
      sequelize,
      modelName: "Expenditure",
    }
  );
  return Expenditure;
};

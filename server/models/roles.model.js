("use strict");
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Roles extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.belongsTo(models.User, {
      //   sourceKey: "id_users",
      //   foreignKey: "id_users",
      //   as: "User",
      // });
    }
  }
  Roles.init(
    {
      id_roles: {
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4,
        primaryKey: true,
        allowNull: false,
      },
      id_users: {
        type: DataTypes.STRING,
        allowNull: true,
      },
      roles: {
        type: DataTypes.STRING,
        allowNull: true,
      },
    },
    {
      sequelize,
      modelName: "Roles",
    }
  );
  return Roles;
};

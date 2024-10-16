'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class language_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.doctors, {
        through:'doctors_info',
        foreignKey: 'languages_id',
        as:"doctors"
      });
    }
  }
  language_master.init(
    {
      name: DataTypes.STRING,
      is_active: DataTypes.BOOLEAN,
    },
    {
      sequelize,
      modelName: 'language_master',
    }
  );
  return language_master;
};

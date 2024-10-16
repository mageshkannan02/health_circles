'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicine_frequency_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       this.hasMany(models.drugs,{
        foreignKey:'drug_frequency_id',
        as:'drug_frequency'
       })
    }
  }
  medicine_frequency_master.init({
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'medicine_frequency_master',
  });
  return medicine_frequency_master;
};
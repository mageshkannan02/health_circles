'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicine_timing_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       this.hasMany(models.drugs,{
        foreignKey:'drug_timing_id',
        as:'drug_timing'
       })
    }
  }
  medicine_timing_master.init({
    timing: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'medicine_timing_master',
  });
  return medicine_timing_master;
};
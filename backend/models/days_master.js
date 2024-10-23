'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class days_master extends Model {
    
    static associate(models) {
       this.hasMany(models.drugs,{
        foreignKey:'day_id',
        as:'daysmaster'
       })
    }
  }
  days_master.init({
    day: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'days_master',
  });
  return days_master;
};
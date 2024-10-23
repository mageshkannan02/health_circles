'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicine_prandial__master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       this.hasMany(models.drugs,{
        
        foreignKey:'drug_prandial_id',

        as:'drug_prandial'
       })
    }
  }
  medicine_prandial__master.init({
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'medicine_prandial__master',
  });
  return medicine_prandial__master;
};
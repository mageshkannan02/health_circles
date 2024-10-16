'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class drug_catagory_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       this.hasMany(models.drugs,{
        foreignKey:'drug_catagery_id',
        as:'drug_catagory'
        
       })
    }
  }
  drug_catagory_master.init({
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'drug_catagory_master',
  });
  return drug_catagory_master;
};
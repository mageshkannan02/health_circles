'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctors_info extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       
    }
  }
  doctors_info.init({
    doctor_id: DataTypes.UUID,
    working_at_id:DataTypes.INTEGER,
    speciality_id:DataTypes.INTEGER,
    languages_id:DataTypes.INTEGER,
  }, {
    sequelize,
    modelName: 'doctors_info',
  });
  return doctors_info;
};
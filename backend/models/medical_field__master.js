'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medical_field__master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // this.hasMany(models.doctors, {
        
      //   foreignKey: 'speciality_id',   
      //   as: 'doctors',
      // });
      this.belongsToMany(models.doctors,{
          through:'doctors_info',
          foreignKey:'speciality_id',
          as:"doctors"
      })
    }

  }
  medical_field__master.init({
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'medical_field__master',
  });
  return medical_field__master;
};
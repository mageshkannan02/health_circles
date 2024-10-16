'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class medicine_dose_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
       this.belongsToMany(models.drugs,{
        through:'rx_group_drugs',
        foreignKey:'dose_id',
        as:'drugs'
       })
    }
  }
  medicine_dose_master.init({
    dosage_session: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'medicine_dose_master',
  });
  return medicine_dose_master;
};
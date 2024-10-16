'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class status_master extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
        this.hasMany(models.rx_groups,{
          foreignKey:'status_id',
          as:'rx_groups'
        })
        this.hasMany(models.rx_group_associations,{
          foreignKey:'status_id',
          as:'rx_group_association'
        })
    }
  }
  status_master.init({
    name: DataTypes.STRING,
    is_active: DataTypes.BOOLEAN
  }, {
    sequelize,
    modelName: 'status_master',
  });
  return status_master;
};
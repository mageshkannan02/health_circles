'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rx_group_associations extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      this.belongsToMany(models.rx_groups,{
       through:'rx_group_drugs',
       foreignKey:'rx_group_association_id',
       as:'rx_groups'
      })
       this.belongsTo(models.status_master,{
        foreignKey:'status_id',
        as:'status'
       })
       this.belongsToMany(models.prescriptions,{
        through:'rx_group_drugs',
        foreignKey:'rx_group_association_id',
        as:'rx_group_associations'
       })
    }
  }
  rx_group_associations.init({
    rx_group_id: DataTypes.UUID,
     is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
    deleted_at: DataTypes.DATE,
    deleted_by: DataTypes.UUID,
    status_id: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rx_group_associations',
  });
  return rx_group_associations;
};
'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class prescriptions extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
         this.belongsToMany(models.rx_groups,{
           through:'rx_group_drugs',
           foreignKey:'prescription_id',
           as:'rx_groups'
         })
         this.belongsToMany(models.rx_group_associations,{
           through:'rx_group_drugs',
           foreignKey:'prescription_id',
           as:'rx_group_associations'
         })
         this.belongsToMany(models.drugs,{
          through:'rx_group_drugs',
          foreignKey:'prescription_id',
          
          as:'drugs'
         })
    }
  }
  prescriptions.init({
    rx_group_id: DataTypes.UUID,
    rx_group_association_id:DataTypes.UUID,
    drug_id:DataTypes.UUID,
    is_active: DataTypes.BOOLEAN,
    created_by: DataTypes.UUID,
    updated_by: DataTypes.UUID,
    deleted_at: DataTypes.DATE,
    deleted_by: DataTypes.UUID,
     
  }, {
    sequelize,
    modelName: 'prescriptions',
  });
  return prescriptions;
};
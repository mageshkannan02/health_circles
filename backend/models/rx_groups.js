'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class rx_groups extends Model {
    static associate(models) {
      this.belongsToMany(models.drugs, {
        through: 'rx_group_drugs',  
        foreignKey: 'rx_group_id',
        as:'drugs'
         
      });

      this.belongsTo(models.status_master, {
        foreignKey: 'status_id',
        as: 'status',
      });

      this.belongsToMany(models.rx_group_associations,{
        through:'rx_group_drugs',
        foreignKey:'rx_group_id',
        as:'rx_group_associations'
      })
       this.belongsToMany(models.prescriptions,{
        through:'rx_group_drugs',
        foreignKey:'rx_group_id',
        as:'prescriptions'
       })
    }
  }

  rx_groups.init(
    {
      id:{
        allowNull: false,
        
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue: DataTypes.UUIDV4, 
      },
      name: DataTypes.STRING,
      doctor_id: DataTypes.UUID,
      drug_id:DataTypes.UUID,
       is_active: DataTypes.BOOLEAN,
      created_by: DataTypes.UUID,
      updated_by: DataTypes.UUID,
      deleted_at: DataTypes.DATE,
      deleted_by: DataTypes.UUID,
      status_id: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'rx_groups',
    }
  );

  return rx_groups;
};

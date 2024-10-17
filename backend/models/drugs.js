'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class drugs extends Model {
    static associate(models) {
      this.belongsToMany(models.rx_groups, {
        through: 'rx_group_drugs',  
        foreignKey: 'drug_id', 
        as:'rxgroups'
         
      });

      this.belongsTo(models.drug_catagory_master, {
        foreignKey: 'drug_catagery_id',
        as: 'drug_catagery',
      });

      this.belongsToMany(models.medicine_dose_master, {
        through:'rx_group_drugs',
        foreignKey: 'drug_id',
        as: 'drug_dose',
      });

      this.belongsTo(models.medicine_timing_master, {
        foreignKey: 'drug_timing_id',
        as: 'drug_timing',
      });

      this.belongsTo(models.medicine_frequency_master, {
        foreignKey: 'drug_frequency_id',
        as: 'drug_frequency',
      });

      this.belongsTo(models.medicine_frequency_master, {
        foreignKey: 'drug_prandial_id',
        as: 'drug_prandial',
      });
        this.belongsToMany(models.prescriptions,{
          through:'rx_group_drugs',
            foreignKey:'drug_id',
            as:'prescriptions'

        })

      
    }
  }

  drugs.init(
    {
      drug_catagery_id: DataTypes.INTEGER,
      name: DataTypes.STRING,
       
      drug_timing_id: DataTypes.INTEGER,
      drug_frequency_id: DataTypes.INTEGER,
      drug_prandial_id: DataTypes.INTEGER,
      is_active: DataTypes.BOOLEAN,
      created_by: DataTypes.UUID,
      updated_by: DataTypes.UUID,
      deleted_at: DataTypes.DATE,
      deleted_by: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'drugs',
    }
  );

  return drugs;
};

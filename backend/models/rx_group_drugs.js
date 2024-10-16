'use strict';
const { Model } = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class rx_group_drugs extends Model {
    static associate(models) {
       
    }
  }

  rx_group_drugs.init(
    {
      drug_id: DataTypes.UUID, 
      rx_group_id: DataTypes.UUID,
      dose_id:DataTypes.INTEGER,
      prescription_id:DataTypes.UUID,
      rx_group_association_id:DataTypes.UUID
    },
    {
      sequelize,
      modelName: 'rx_group_drugs',
    }
  );

  return rx_group_drugs;
};

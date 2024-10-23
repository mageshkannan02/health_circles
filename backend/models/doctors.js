'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class doctors extends Model {
    static associate(models) {
      this.belongsToMany(models.hospital_master, {
        through: 'doctors_info',
        foreignKey: 'doctor_id',
        as: 'hospitals',
      });
      this.belongsToMany(models.language_master, {
        through: 'doctors_info',
        foreignKey: 'doctor_id',
        as: 'languages',
      });
       
      this.belongsToMany(models.medical_field__master,{

          through:'doctors_info',
          foreignKey:'doctor_id',
          as:'speciality'
      })
      this.belongsToMany(models.rx_groups, {
        
        through: 'rx_group_drugs',
        foreignKey: 'doctor_id',
        as: 'rx_groups',
      });
    }
  }
  doctors.init(
    {
      id: {
        allowNull: false,
        
        primaryKey: true,
        type: DataTypes.UUID,
        defaultValue:DataTypes.UUIDV4

      },
      name: DataTypes.STRING,
       
      serving_from: DataTypes.DATE,
      address: DataTypes.STRING,
       
      about: DataTypes.STRING,
      is_active: DataTypes.BOOLEAN,
      created_by: DataTypes.UUID,
      updated_by: DataTypes.UUID,
      deleted_at: DataTypes.DATE,
      deleted_by: DataTypes.UUID,
    },
    {
      sequelize,
      modelName: 'doctors',
    }
  );
  return doctors;
};

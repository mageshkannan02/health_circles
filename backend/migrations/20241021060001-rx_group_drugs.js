'use strict';

const { DataTypes } = require('sequelize');

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rx_group_drugs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      drug_id: {
        type: Sequelize.UUID,
        references:{
          model:'drugs',
          key:'id'
        },
        allowNull: true,

      },
      rx_group_id: {
        type: Sequelize.UUID,
        references:{
          model:'rx_groups',
          key:'id'
        },
        allowNull: true,
        
      },
      dose_id:{
            type:DataTypes.INTEGER,
            references:{
              model:'medicine_dose_masters',
              key:'id'
            },
            allowNull: true,
      },
      rx_group_association_id:{
            type:DataTypes.UUID,
            references:{
              model:'rx_group_associations',
              key:'id'
            },
            allowNull: true,
      },
      prescription_id:{
        type:DataTypes.UUID,
        references:{
          model:'prescriptions',
          key:'id'
        },
        allowNull: true,
      },

      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('rx_group_drugs');
  }
};
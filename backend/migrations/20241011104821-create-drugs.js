'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('drugs', {
      id: {
        allowNull: false,
        
        primaryKey: true,
        type: Sequelize.UUID
      },
      
      drug_catagery_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'drug_catagory_masters',
          key:'id'
        }
      },
      name: {
        type: Sequelize.STRING
      },
     
       
       
      drug_timing_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'medicine_timing_masters',
          key:'id'
        }
      },
      drug_frequency_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'medicine_frequency_masters',
          key:'id'
        }
      },
      drug_prandial_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'medicine_prandial__masters',
          key:'id'
        }
      },
      is_active: {
        type: Sequelize.BOOLEAN
      },
      created_by: {
        type: Sequelize.UUID
      },
      updated_by: {
        type: Sequelize.UUID
      },
      deleted_at: {
        type: Sequelize.DATE
      },
      deleted_by: {
        type: Sequelize.UUID
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
    await queryInterface.dropTable('drugs');
  }
};
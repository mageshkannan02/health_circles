'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('prescriptions', {
      id: {
        allowNull: false,
        
        primaryKey: true,
        type: Sequelize.UUID
      },
      rx_group_id: {
        type: Sequelize.UUID,
        references:{
          model:'rx_groups',
          key:'id'
        }
      },
      rx_group_association_id:{
        type: Sequelize.UUID,
        references:{
          model:'rx_group_associations',
          key:'id'
        }
      },
      drug_id:{
        type: Sequelize.UUID,
        references:{
          model:'drugs',
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
    await queryInterface.dropTable('prescriptions');
  }
};
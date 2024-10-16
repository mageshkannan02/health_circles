'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('rx_group_associations', {
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
      status_id: {
        type: Sequelize.INTEGER,
        references:{
          model:'status_masters',
          key:'id'
        }
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
    await queryInterface.dropTable('rx_group_associations');
  }
};
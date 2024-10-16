'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('drug_catagory_masters', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false
      },
      is_active: {
        type: Sequelize.BOOLEAN,
        defaultValue: true
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue: new  Date()
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
        defaultValue:  new  Date()
      }
    });
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('drug_catagory_masters');
  }
};

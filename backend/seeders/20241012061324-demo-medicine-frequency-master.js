'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('medicine_frequency_masters', [
      {
        name: 'Once a day',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Daily',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Twice a day',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Three times a day',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Four times a day',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('medicine_frequency_masters', null, {});
  }
};

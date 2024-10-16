'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('medicine_prandial__masters', [
      {
        name: 'Before Meal',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'After Meal',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'With Meal',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('medicine_prandial__masters', null, {});
  }
};

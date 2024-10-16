'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('medicine_timing_masters', [
      {
        timing: '5 minutes',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        timing: '10 minutes',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        timing: '20 minutes',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('medicine_timing_masters', null, {});
  }
};

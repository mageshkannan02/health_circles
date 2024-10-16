'use strict';

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('medicine_dose_masters', [
      {
        dosage_session: 'Morning',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dosage_session: 'Afternoon',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        dosage_session: 'Evening',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('medicine_dose_masters', null, {});
  }
};

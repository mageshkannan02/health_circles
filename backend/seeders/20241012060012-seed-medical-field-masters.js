'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert('medical_field__masters', [
      {
        name: 'Cardiology',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Neurology',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Pediatrics',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Orthopedics',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: 'Dermatology',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      // Add more medical fields as needed
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete('medical_field__masters', null, {});
  }
};

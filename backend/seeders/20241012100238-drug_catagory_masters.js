'use strict';

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('drug_catagory_masters', [
      {
        name: 'Analgesics',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Drugs',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'oilment',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'syrup',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },

      {
        name: 'Antibiotics',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Antiseptics',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        name: 'Antipyretics',
        is_active: true,
        createdAt: new Date(),
        updatedAt: new Date()
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('drug_catagory_masters', null, {});
  }
};

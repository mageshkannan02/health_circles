'use strict';

module.exports = {
  async up (queryInterface, Sequelize) {
    return queryInterface.bulkInsert('days_masters', [
      { day: 1, createdAt: new Date(), updatedAt: new Date() },
      { day: 2, createdAt: new Date(), updatedAt: new Date() },
      { day: 3, createdAt: new Date(), updatedAt: new Date() },
      { day: 4, createdAt: new Date(), updatedAt: new Date() },
      { day: 5, createdAt: new Date(), updatedAt: new Date() },
      { day: 6, createdAt: new Date(), updatedAt: new Date() },
      { day: 7, createdAt: new Date(), updatedAt: new Date() }
    ], {});
  },

  async down (queryInterface, Sequelize) {
    return queryInterface.bulkDelete('days_masters', null, {});
  }
};

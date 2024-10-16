'use strict';
const { v4: uuidv4 } = require('uuid');
module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('doctors', [
      {
        id: uuidv4(),  // example UUID, you should generate real ones
        name: 'Dr. John Doe',
        working_at_id: 1,  // Example reference to hospital_masters
        speciality_id: 1,  // Example reference to medical_field_masters
        serving_from: new Date('2015-06-15'),
        address: '123 Main St, Cityville',
        languages_known_id: 1, // Example reference to language_masters
        about: 'Experienced cardiologist with over 10 years of service.',
        is_active: true,
        created_by: 'beaeedca-4c9f-4b88-8447-12fd2a716710', // example UUID
        updated_by: 'beaeedca-4c9f-4b88-8447-12fd2a716710', // example UUID
        deleted_at: null, // assuming doctor is not deleted
        deleted_by: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(), // example UUID
        name: 'Dr. Jane Smith',
        working_at_id: 2,  // Example reference to hospital_masters
        speciality_id: 2,  // Example reference to medical_field_masters
        serving_from: new Date('2018-09-12'),
        address: '456 High St, Townsville',
        languages_known_id: 2, // Example reference to language_masters
        about: 'Specialist in pediatric care with a passion for children’s health.',
        is_active: true,
        created_by: 'beaeedca-4c9f-4b88-8447-12fd2a716710', // example UUID
        updated_by: 'beaeedca-4c9f-4b88-8447-12fd2a716710', // example UUID
        deleted_at: null,
        deleted_by: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('doctors', null, {});
  }
};

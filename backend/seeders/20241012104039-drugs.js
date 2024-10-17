'use strict';
const { v4: uuidv4 } = require('uuid'); // Import UUID generator

module.exports = {
  async up(queryInterface, Sequelize) {
    return queryInterface.bulkInsert('drugs', [
      {
        id: uuidv4(),  // Generate unique UUID
        drug_catagery_id: 1,  // Reference to `drug_catagory_masters`
        name: 'Paracetamol',
         // Reference to `medicine_dose_masters`
        drug_timing_id: 1,  // Reference to `medicine_timing_masters`
        drug_frequency_id: 1,  // Reference to `medicine_frequency_masters`
        drug_prandial_id: 1,  // Reference to `medicine_prandial_masters`
        is_active: true,
        created_by: uuidv4(), // UUID for created_by
        updated_by: uuidv4(), // UUID for updated_by
        deleted_at: null,
        deleted_by: null,
        createdAt: new Date(),
        updatedAt: new Date()
      },
      {
        id: uuidv4(),  // Generate another unique UUID
        drug_catagery_id: 2,  // Reference to `drug_catagory_masters`
        name: 'Ibuprofen',
          // Reference to `medicine_dose_masters`
        drug_timing_id: 2,  // Reference to `medicine_timing_masters`
        drug_frequency_id: 2,  // Reference to `medicine_frequency_masters`
        drug_prandial_id: 2,  // Reference to `medicine_prandial_masters`
        is_active: true,
        created_by: uuidv4(), // UUID for created_by
        updated_by: uuidv4(), // UUID for updated_by
        deleted_at: null,
        deleted_by: null,
        createdAt: new Date(),
        updatedAt: new Date()
      }
    ]);
  },

  async down(queryInterface, Sequelize) {
    return queryInterface.bulkDelete('drugs', null, {});
  }
};

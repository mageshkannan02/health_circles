'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('doctors_infos', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      doctor_id: {
        type: Sequelize.UUID,
        references:{
          model:'doctors',
          key:'id'
        }
      },
      working_at_id:{
        type: Sequelize.INTEGER,
        references:{
          model:'hospital_masters',
          key:'id'
        }
      },
      speciality_id:{
        type: Sequelize.INTEGER,
        references:{
          model:'medical_field__masters',
          key:'id'
        }
      },
      languages_id:{
        type: Sequelize.INTEGER,
        references:{
          model:'language_masters',
          key:'id'
        }
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('doctors_infos');
  }
};
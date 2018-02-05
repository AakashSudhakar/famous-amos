'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('Pets', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING
      },
      species: {
        type: Sequelize.STRING
      },
      birthday: {
        type: Sequelize.STRING
      },
      favoriteFood: {
        type: Sequelize.STRING
      },
      picUrl: {
        type: Sequelize.TEXT
      },
      picUrlSq: {
        type: Sequelize.TEXT
      },
      description: {
        type: Sequelize.STRING
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
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('Pets');
  }
};
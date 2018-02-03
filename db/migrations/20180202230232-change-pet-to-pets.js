'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.renameTable('Pet', 'Pets');
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.renameTable('Pets', 'Pet');
  }
};

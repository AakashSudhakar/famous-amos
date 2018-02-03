'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Pets", "id");
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.addColumn("Pets", "id", Sequelize.INTEGER);
  }
};

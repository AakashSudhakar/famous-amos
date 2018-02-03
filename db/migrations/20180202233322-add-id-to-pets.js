'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    queryInterface.addColumn("Pets", "id", { type: Sequelize.INTEGER, allowNull: false, autoIncrement: true, primaryKey: true })
  },

  down: (queryInterface, Sequelize) => {
    queryInterface.removeColumn("Pets", "id");
  }
};

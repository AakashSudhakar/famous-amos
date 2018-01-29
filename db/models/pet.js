'use strict';

const Pets = require("../../routes/pets");

module.exports = (sequelize, DataTypes) => {
  var Pet = sequelize.define('Pet', {
    name: DataTypes.STRING,
    species: DataTypes.STRING,
    birthday: DataTypes.STRING,
    favoriteFood: DataTypes.STRING,
    picUrl: DataTypes.TEXT,
    picUrlSq: DataTypes.TEXT,
    description: DataTypes.STRING
  }, {
    classMethods: {
      associate: function(models) {
        // associate with comments
      }
    }
  });

  return Pet;
};
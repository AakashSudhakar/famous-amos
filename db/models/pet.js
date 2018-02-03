'use strict';

const sequelize = require("sequelize");

module.exports = function(sequelize, DataTypes) {
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
        // Pet.hasMany(models.Comment);
        sequelize.sync;
      }
    }
  });
  return Pet;
};
'use strict';

const Pets = require("../../routes/pets");

module.exports = (sequelize, DataTypes) => {
  var Pets = sequelize.define('Pets', {
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
        Pets.hasMany(models.Comment);
        sequelize.sync;
      }
    }
  });
  return Pets;
};
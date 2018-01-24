'use strict';
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
        // associations can be defined here
      }
    }
  });
  return Pet;
};
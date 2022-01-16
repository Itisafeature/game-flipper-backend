'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Game extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  Game.init({
    title: DataTypes.STRING,
    publisher: DataTypes.STRING,
    release_date: DataTypes.DATE,
    current_price: DataTypes.FLOAT,
    edition: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'Game',
  });
  return Game;
};
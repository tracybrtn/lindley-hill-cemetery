const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create Surname model

class Surname extends Model {}

//Create fields/columns for Surname model

Surname.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    surname: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'suname'
    //timestamps default is true
  }
);

module.exports = Surname;
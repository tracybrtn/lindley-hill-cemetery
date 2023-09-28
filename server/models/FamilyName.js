const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create FamilyName model
class FamilyName extends Model {}

//Create fields/columns for FamilyName model
FamilyName.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    familyName: {
      type: DataTypes.STRING,
      allowNull: false
    }
  },
  {
    sequelize,
    freezeTableName: true,
    underscored: true,
    modelName: 'family_name'
    //timestamps default is true
  }
);

module.exports = FamilyName;
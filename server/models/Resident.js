const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

//Create Resident Model
class Resident extends Model {}

Resident.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    surname_id: {
      type: DataTypes.INTEGER,
      REFERENCES: {
          model: "surname",
          key: "id",
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: "resident",
  }
)

module.exports = Resident;
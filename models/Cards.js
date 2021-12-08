const {Model, DataTypes} = require('sequelize');

// import db connection
const sequelize = require('../config/connection.js');

// initialize model
class Cards extends Model {}

// set up fields and rules
Cards.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
    },
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    text: {
      type: DataTypes.STRING,
      allowNull: true,
      validate: {
        len: {
          args: [5, 200],
          msg: 'Please provide a description between 5 and 200 characters',
        },
      },
    },
    column_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'columns',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'cards',
  }
);

module.exports = Cards;

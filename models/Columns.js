const {Model, DataTypes} = require('sequelize');

// import db connection
const sequelize = require('../config/connection.js');

// initialize model
class Columns extends Model {}

// set up fields and rules
Columns.init(
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
      validate: {
        len: [1],
      },
    },
    project_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: 'projects',
        key: 'id',
      },
      onDelete: 'cascade',
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'columns',
  }
);

module.exports = Columns;

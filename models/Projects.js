const {Model, DataTypes} = require('sequelize');

// import db connection
const sequelize = require('../config/connection.js');

// initialize model
class Projects extends Model {}

// set up fields and rules
Projects.init(
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
    user_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'users',
        key: 'id',
      },
    },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'projects',
  }
);

module.exports = Projects;

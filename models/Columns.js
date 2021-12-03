const { Model, DataTypes } = require('sequelize');

// import db connection
const sequelize = require('../config/connection.js');

// initialize model
class Columns extends Model {}


// set up fields and rules
Columns.init(



    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Columns',  
    }
);

module.exports = Columns;
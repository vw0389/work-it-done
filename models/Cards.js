const { Model, DataTypes } = require('sequelize');

// import db connection
const sequelize = require('../config/connection.js');

// initialize model
class Cards extends Model {}


// set up fields and rules
Cards.init(



    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Cards',  
    }
);

module.exports = Cards;
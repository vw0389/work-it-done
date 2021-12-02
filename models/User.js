const { Model, DataTypes } = require('sequelize');

// import db connection
const sequelize = require('../config/connection.js');

// initialize model
class User extends Model {}


// set up fields and rules
User.init(



    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'user',  
    }
);

module.exports = User;
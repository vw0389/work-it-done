const { Model, DataTypes } = require('sequelize');

// import db connection
const sequelize = require('../config/connection.js');

// initialize model
class Users extends Model {}


// set up fields and rules
Users.init(



    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Users',  
    }
);

module.exports = Users;
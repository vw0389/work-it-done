const { Model, DataTypes } = require('sequelize');

// import db connection
const sequelize = require('../config/connection.js');

// initialize model
class Projects extends Model {}


// set up fields and rules
Projects.init(



    {
        sequelize,
        timestamps: false,
        freezeTableName: true,
        underscored: true,
        modelName: 'Projects',  
    }
);

module.exports = Projects;
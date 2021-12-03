// import models
const Project = require('./Project');
const Column = require('./Column');
const Card = require('./Card');
const User = require('./User');

// Board belongsTo User
Board.belongsTo(User, {

});

// User hasMany boards
User.hasMany(Board, {

});


// List belongsTo Board
List.belongsTo(Board, {

});


// Board hasMany Lists
Board.hasMany(List, {

});


// Task belongsTo List
Task.belongsTo(List, {

});


// List hasMany Tasks
List.hasMany(Task, {

});


module.exports = {
    Board,
    List,
    Task,
    User
};
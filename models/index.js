// import models
const Board = require('./Board');
const List = require('./List');
const Task = require('./Task');
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
// import models
const Projects = require('./Projects');
const Columns = require('./Columns');
const Cards = require('./Cards');
const Users = require('./Users');

// Projects belongsTo Users
Projects.belongsTo(Users, {

});

// Users hasMany Projects
Users.hasMany(Projects, {
    onDelete: "cascade"
});


// Columns belongsTo Projects
Columns.belongsTo(Projects, {

});


// Projects hasMany Columns
Projects.hasMany(Columns, {
    onDelete: "cascade"
});


// Cards belongsTo Columns
Cards.belongsTo(Columns, {

});


// Columns hasMany Cards
Columns.hasMany(Cards, {
    onDelete: "cascade"
});


module.exports = {
    Projects,
    Columns,
    Cards,
    Users
};
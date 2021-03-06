// import models
const Projects = require('./Projects');
const Columns = require('./Columns');
const Cards = require('./Cards');
const Users = require('./Users');

// Projects belongsTo Users
Projects.belongsTo(Users);

// Users hasMany Projects
Users.hasMany(Projects);

// Columns belongsTo Projects
Columns.belongsTo(Projects);

// Projects hasMany Columns
Projects.hasMany(Columns);

// Cards belongsTo Columns
Cards.belongsTo(Columns);

// Columns hasMany Cards
Columns.hasMany(Cards);

module.exports = {
  Projects,
  Columns,
  Cards,
  Users,
};

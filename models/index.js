// import models
const Projects = require('./Projects');
const Columns = require('./Columns');
const Cards = require('./Cards');
const Users = require('./Users');

// Projects belongsTo Users
Projects.belongsTo(Users, {
  foreignKey: 'user_id',
});

// Users hasMany Projects
Users.hasMany(Projects, {
  foreignKey: 'user_id',
});

// Columns belongsTo Projects
Columns.belongsTo(Projects, {

});

// Projects hasMany Columns
Projects.hasMany(Columns, {
  foreignKey: 'user_id',
});


// Cards belongsTo Columns
Cards.belongsTo(Columns, {
  foreignKey: 'column_id',
});

// Columns hasMany Cards
Columns.hasMany(Cards, {
  foreignKey: 'column_id',
});


module.exports = {
  Projects,
  Columns,
  Cards,
  Users,
};

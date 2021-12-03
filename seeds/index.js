const seedUsers = require('./users-seeds');
const seedProjects = require('./projects-seeds');
const seedColumns = require('./columns-seeds');
const seedCards = require('./cards-seeds');


const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('--------------');
  await seedUsers();
  console.log('--------------');

  await seedProjects();
  console.log('--------------');

  await seedColumns();
  console.log('--------------');

  await seedCards();
  console.log('--------------');

  process.exit(0);
};

seedAll();

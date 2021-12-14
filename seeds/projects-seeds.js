const Projects = require('../models/Projects');

const projectsdata = [
  {
    name: 'Learn Spanish',
    user_id: 1,
  },
  {
    name: 'Learn front end web development',
    user_id: 1,
  },
  {
    name: 'Learn music in 6 months',
    user_id: 2,
  },
  {
    name: 'Train the dog',
    user_id: 3,
  },
  {
    name: 'Remodel the basement',
    user_id: 4,
  },
  {
    name: 'Spring cleaning',
    user_id: 3,
  },
];

const seedProjects = () => Projects.bulkCreate(projectsdata);

module.exports = seedProjects;

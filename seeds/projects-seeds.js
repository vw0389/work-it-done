const Projects = require('../models/Projects');

const projectsdata = [
  {
    name: 'Doing development stuff',
    user_id: 2,
  },
  {
    name: 'Doing development stuff more',
    user_id: 2,
  },
  {
    name: 'Doing taking a break stuff',
    user_id: 2,
  },
  {
    name: 'Doing development stuff',
    user_id: 3,
  },
  {
    name: 'doing other development stuff',
    user_id: 1,
  },
  {
    name: 'doing even more development stuff 3',
    user_id: 3,
  },
];

const seedProjects = () => Projects.bulkCreate(projectsdata);

module.exports = seedProjects;

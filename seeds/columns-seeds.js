const Columns = require('../models/Columns');

const columnsdata = [
  {
    name: 'TO DO',
    project_id: 1,
  },
  {
    name: 'In Progress',
    project_id: 1,
  },
  {
    name: 'Finished',
    project_id: 1,
  },
  {
    name: 'In Progress',
    project_id: 2,
  },
  {
    name: 'Finished',
    project_id: 2,
  },
  {
    name: 'English Bob',
    project_id: 3,
  },
  {
    name: 'To Do',
    project_id: 3,
  },
  {
    name: 'In Progress',
    project_id: 3,
  },
  {
    name: 'Finished',
    project_id: 3,
  }
];

const seedColumns = () => Columns.bulkCreate(columnsdata);

module.exports = seedColumns;

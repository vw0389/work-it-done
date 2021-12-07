const Columns = require('../models/Columns');

const columnsdata = [
  {
    name: 'To Learn',
    project_id: 1,
  },
  {
    name: 'Learning',
    project_id: 1,
  },
  {
    name: 'Learned',
    project_id: 1,
  },
  {
    name: 'Add',
    project_id: 2,
  },
  {
    name: 'Commit',
    project_id: 2,
  },
  {
    name: 'Push',
    project_id: 2,
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
  },
  {
    name: 'To Do',
    project_id: 4,
  },
  {
    name: 'In Progress',
    project_id: 4,
  },
  {
    name: 'Finished',
    project_id: 4,
  },
  {
    name: 'To Do',
    project_id: 5,
  },
  {
    name: 'In Progress',
    project_id: 5,
  },
  {
    name: 'Finished',
    project_id: 5,
  },
  {
    name: 'To Do',
    project_id: 6,
  },
  {
    name: 'In Progress',
    project_id: 6,
  },
  {
    name: 'Finished',
    project_id: 6,
  },
  
];

const seedColumns = () => Columns.bulkCreate(columnsdata);

module.exports = seedColumns;

const router = require('express').Router();
const sequelize = require('../config/connection');
const {Users, Projects, Columns, Cards} = require('../models');

// Workspace with no project selected
router.get('/', (req, res) => {
  Projects.findAll({
    where: {
      user_id: 2,
    },
    attributes: ['id', 'name'],
    include: [
      {
        model: Columns,
        attributes: ['id', 'name'],
        include: [
          {
            model: Cards,
            attributes: ['id', 'name', 'text'],
          },
        ],
      },
    ],
  }).then(dbProjectData => {
    const projects = dbProjectData.map(project => project.get({plain: true}));
    res.render('workspace', {projects, active: 0});
  });
});

// Workspace with project selected
router.get('/:id', (req, res) => {
  Projects.findAll({
    where: {
      user_id: 2,
    },
    attributes: ['id', 'name'],
    include: [
      {
        model: Columns,
        attributes: ['id', 'name'],
        include: [
          {
            model: Cards,
            attributes: ['id', 'name', 'text'],
          },
        ],
      },
    ],
  }).then(dbProjectData => {
    const projects = dbProjectData.map(project => project.get({plain: true}));
    res.render('workspace', {projects, active: req.params.id});
  });
});

module.exports = router;

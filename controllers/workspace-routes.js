const router = require('express').Router();
const sequelize = require('../config/connection');
const {Users, Projects, Columns, Cards} = require('../models');
const withAuth = require('../utils/auth');

// Workspace with no project selected
router.get('/', withAuth, (req, res) => {
  Projects.findAll({
    where: {
      user_id: req.session.user_id,
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
    res.render('workspace', {projects, loggedIn: true});
  });
});

// Workspace with project selected
router.get('/:id', withAuth, (req, res) => {
  Projects.findAll({
    where: {
      user_id: req.session.user_id,
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

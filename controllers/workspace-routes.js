const router = require('express').Router();
const sequelize = require('../config/connection');
const {Users, Projects, Columns, Cards} = require('../models');

router.get('/', (req, res) => {
  Projects.findAll({
    where: {
      user_id: 1,
    },
    attributes: ['id', 'name'],
  }).then(dbProjectData => {
    console.log(dbProjectData);
    const projects = dbProjectData.map(project => project.get({plain: true}));
    res.render('workspace', {projects});
  });
});

module.exports = router;

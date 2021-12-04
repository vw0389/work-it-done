const router = require('express').Router();
const { Projects, Cards, Columns, Users } = require('../../model');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// TJ's test data
// const projects = require('../../test-data');

// model: projects: name

router.get('/projects/:id', (req, res) => {
  const id = req.params.id;
  res.render('project', { projects });
});

// post create a new project
router.post('/projects', (req, res) => {
  console.log(req.body);
  Projects.create({
    name: req.body.name,
  }).then(dbPostData =>
    res.json(dbPostData).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  );
});

// Delete a project
router.delete('/projects/:projectId', (req, res) => {
  Projects.destroy({
    id: req.body.projectId,
  },
    {
      where: {
        id: req.body.projectId,
      },
    }
  ).then(dbPostData =>
    res.json(dbPostData).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  );
})

module.exports = router;
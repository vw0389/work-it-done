const router = require('express').Router();
const { Projects, Cards, Columns, Users } = require('../../models');
const sequelize = require('../../config/connection');

// TJ's test data
// const projects = require('../../test-data');

// model: projects: name
// get all projects for a user  ---WORKING
router.get('/:userId', (req, res) => {
  Projects.findAll({
    where: {
      user_id: req.params.userId,
    }
  }).then(dbPostData => {
    if (!dbPostData[0]) {
      res.status(404)
        .json({ message: 'There was no project found with this id.' });
      return;
    }
    res.json(dbPostData)
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post create a new project  ---WORKING
router.post('/', (req, res) => {
  Projects.create({
    name: req.body.name,
    user_id: req.body.user_id,
  }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// Delete a project  ---WORKING
router.delete('/:id', (req, res) => {
  Projects.destroy({
    where: {
      id: req.params.id,
    },
  }
  ).then(dbPostData => {
    if (!dbPostData) {
      res.status(404)
        .json({ message: 'There was no card found with this id.' });
      return;
    }
    res.json(dbPostData)
  })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
})

module.exports = router;
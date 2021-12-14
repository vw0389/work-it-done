const router = require('express').Router();
const {Projects, Cards, Columns, Users} = require('../../models');
const sequelize = require('../../config/connection');

// model: projects: name

// get all projects
router.get('/', (req, res) =>
  Projects.findAll()
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
);

// get all projects for a user  ---WORKING
router.get('/:userId', (req, res) => {
  Projects.findAll({
    where: {
      user_id: req.params.userId,
    },
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({message: 'There was no project found with this id.'});
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// ERROR STARTS HERE
// post create a new project  ---WORKING
router.post('/', (req, res) => {
  Projects.create({
    name: req.body.name,
    user_id: req.session.user_id,
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});
// ERROR ENDS HERE

// put update project data   ---WORKING
router.put('/:id', (req, res) => {
  console.log("it's here,", req.body);
  Projects.update(req.body, {
    where: {
      id: req.body.id,
    },
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({message: 'There was no project found with this id.'});
        return;
      }
      console.log(dbPostData);
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a project  ---WORKING
router.delete('/:id', (req, res) => {
  Projects.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({message: 'There was no card found with this id.'});
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

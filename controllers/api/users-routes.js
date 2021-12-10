const router = require('express').Router();
const { Projects, Cards, Columns, Users } = require('../../models');
const sequelize = require('../../config/connection');

// users: id, email, password

// get all users   ---WORKING
router.get('/', (req, res) => 
  Users.findAll()
    .then(dbPostData =>
      res.json(dbPostData)).catch(err => {
        console.log(err);
        res.status(500).json(err);
      })
);

// get all users by id   ---WORKING
router.get('/:id', (req, res) => {
  Users.findAll({
    where: {
      id: req.params.id,
    },
  }).then(dbPostData =>
    res.json(dbPostData)).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// post create new user   ---WORKING
router.post('/', (req, res) => {
  console.log(req.body);
  Users.create({
    email: req.body.email,
    password: req.body.password,
  }).then(dbPostData =>
    res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// put update new user   ---WORKING
router.put('/:id', (req, res) => {
  console.log(req.body);
  Users.update(req.body, {
    where: {
      id: req.params.id,
    },
  }).then(dbPostData =>
    res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// Delete a project  ---WORKING
router.delete('/:id', (req, res) => {
  Users.destroy({
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
const router = require('express').Router();
const {Users} = require('../../models');

// Model: users: id, email, password

// get all users   ---WORKING || api/users
router.get('/', (req, res) =>
  Users.findAll()
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
);

// get all users by id   ---WORKING  || api/users/:id
router.get('/:id', (req, res) => {
  Users.findAll({
    where: {
      id: req.params.id,
    },
  })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post create new user   ---WORKING || api/users
router.post('/', (req, res) => {
  console.log(req.body);
  Users.create({
    email: req.body.email,
    password: req.body.password,
  })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// put update new user   ---WORKING || api/users/:id
router.put('/:id', (req, res) => {
  console.log(req.body);
  Users.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(userData => res.json(userData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a project  ---WORKING || api/users/:id
router.delete('/:id', (req, res) => {
  Users.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(userData => {
      if (!userData) {
        res.status(404).json({message: 'There was no card found with this id.'});
        return;
      }
      res.json(userData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

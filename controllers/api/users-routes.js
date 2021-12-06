const router = require('express').Router();
const {Projects, Cards, Columns, Users} = require('../../models');
const sequelize = require('../../config/connection');

// users: id, email, password

// get all projects for a user
router.get('/:id', (req, res) => {
  Users.findAll({
    where: {
      id: req.params.id,
    },
  }).then(dbPostData =>
    res.json(dbPostData).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  );
});

module.exports = router;

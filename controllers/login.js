const router = require('express').Router();
const {Users} = require('../models');

router.post('/login', (req, res) => {
  // Expects json object { "email": "notrealemail@vweinert.com", "password": "passythepassword"}
  Users.findOne({
    where: {
      email: req.body.email,
    },
  }).then(User => {
    if (!User) {
      res.status(400).json({message: 'no user with that email address'});
      return;
    }
    const validPassowrd = User.checkPassword(req.body.password);
    if (!validPassowrd) {
      res.status(400).json({message: 'incorrect password'});
      return;
    }
    req.session.save(() => {
      // declare session variables
      req.session.user_id = User.id;
      req.session.email = User.email;
      req.session.loggedIn = true;

      delete User.dataValues.password;

      res.json({user: User, message: 'Logged in'});
    });

    // This doesn't work for some fucking reason
    // delete User.password;
  });
});

router.post('/logout', (req, res) => {
  if (req.session.loggedIn) {
    req.session.destroy(() => {
      res.status(204).end();
    });
  } else {
    res.status(404).end();
  }
});

module.exports = router;

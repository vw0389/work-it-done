const router = require('express').Router();
const sequelize = require('../config/connection');
const { Users } = require('../models');
const session = require('express-session');
router.post('/login', (req, res) => {
    // Expects json object { email: me@vweinert.com, password: "passythepassword"}
    Users.findOne({
        where: {
            email: req.body.email
        }

    }).then(User => {
        if (!User) {
            res.status(400).json({ message: "no user with that email address" });
            return;
        }
        const validPassowrd = User.checkPassword(req.body.password);
        if (!validPassowrd) {
            res.status(400).json({ message: 'incorrect password' });
            return;
        }
        req.session.save(() => {
            // declare session variables
            req.session.user_id = User.id;
            req.session.username = User.username;
            req.session.loggedIn = true;

            res.json({ user: dbUserData, message: 'Logged in' });
        });
    });
});

router.post('/logout', (req, res) => {
    if (req.session.loggedIn) {
        req.session.destroy(() => {
          res.status(204).end();
        });
      }
      else {
        res.status(404).end();
      }
});
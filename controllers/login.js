const router = require('express').Router();
const { Users } = require('../models');
const { Validator } = require('node-input-validator');

// router.post('/login', (req, res) => {
//     // Expects json object { "email": "notrealemail@vweinert.com", "password": "passythepassword"}
//     Users.findOne({
//         where: {
//             email: req.body.email,
//         },
//     }).then(User => {
//         if (!User) {
//             res.status(400).json({ message: 'no user with that email address' });
//             return;
//         }
//         const validPassowrd = User.checkPassword(req.body.password);
//         if (!validPassowrd) {
//             res.status(400).json({ message: 'incorrect password' });
//             return;
//         }
//         req.session.save(() => {
//             // declare session variables
//             req.session.user_id = User.id;
//             req.session.email = User.email;
//             req.session.loggedIn = true;

//             delete User.dataValues.password;

//             res.json({ user: User, message: 'Logged in' });
//         });
//     });
// });

router.post('/login', (req, res) => {
    const v = new Validator(req.body, {
        email: 'required|email',
        password: 'required'
    });

    v.check().then((matched) => {
        if (!matched) {
            res.status(422).send(v.errors);
        }
    })
    Users.findOne({
        where: {
            email: req.body.email,
        },
    }).then(User => {
        if (!User) {
            res.status(400).json({ message: 'no user with that email address' });
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
            req.session.email = User.email;
            req.session.loggedIn = true;

            delete User.dataValues.password;

            res.json({ user: User, message: 'Logged in' });
        });
    });
});

router.post('/register', (req, res) => {
    Users.findOne({
        where: {
            email: req.body.email,
        },
    }).then(User => {
        if (!User) {
            Users.create({
                email: req.body.email,
                password: req.body.password
            }).then(User => {
                req.session.save(() => {
                    // declare session variables
                    req.session.user_id = User.id;
                    req.session.email = User.email;
                    req.session.loggedIn = true;
                    delete User.dataValues.password;

                    res.json({ user: User, message: 'Logged in' });
                });
            })
        } else {
            res.status(400).json({ message: "that user already exists" });
        }


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
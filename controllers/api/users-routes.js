const router = require('express').Router();
const { Projects, Cards, Columns } = require('../../model');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// users: id, email, password

// get all projects for a user
router.get('/api/users-routes/:user', (req, res) => {
    Projects.findAll({
        where: {
            id: req.params.id
        },
    })
        .then(dbPostData => res.json(dbPostData)
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
        );
});

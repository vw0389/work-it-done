const router = require('express').Router();
const { Projects, Cards, Columns, Users } = require('../../model');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// model: projects: name

// post create a new project
router.post('/api/projects-routes', (req, res) => {
    console.log(req.body);
    Projects.create({
        name: req.body.name
    }).then(dbPostData => res.json(dbPostData)
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    );
});
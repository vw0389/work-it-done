const router = require('express').Router();
const { Projects, Cards } = require('../../model');
const sequelize = require('../../config/connection');
const withAuth = require('../../utils/auth');

// model: columns: name, FK(project_id)

// get all columns for a project
router.get('/api/columns-routes/:projectId', (req, res) => {
    Projects.findAll({
        where: {
            project_id: req.params.projectId
        },
    })
        .then(dbPostData => res.json(dbPostData)
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
        );
});

// post create new column
router.post('/api/columns-routes', (req, res) => {
    console.log(req.body);
    Projects.create({
        name: req.body.name,        
        project_id: req.body.columnId
    }).then(dbPostData => res.json(dbPostData)
        .catch(err => {
            console.log(err);
            res.status(500).json(err);
        })
    );
});

// put update columns within project
router.put('/api/columns-routes/:id', (req, res) => {
    console.log(req.body);
    Projects.update({
        name: req.body.name
    },
        {
            where: {
                project_id: req.body.projectId
            }
        }
    ).then(dbPostData => res.json(dbPostData)
            .catch(err => {
                console.log(err);
                res.status(500).json(err);
            })
        );
});
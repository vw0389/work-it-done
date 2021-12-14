const router = require('express').Router();
const {Projects} = require('../../models');

/* Model: projects: name */

// get all projects  || api/projects
router.get('/', (req, res) =>
  Projects.findAll()
    .then(projectData => res.json(projectData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
);

// get all projects for a user  ---WORKING || api/projects/:id
router.get('/:id', (req, res) => {
  Projects.findAll({
    where: {
      user_id: req.params.id,
    },
  })
    .then(projectData => {
      if (!projectData) {
        res.status(404).json({message: 'There was no project found with this id.'});
        return;
      }
      res.json(projectData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post create a new project  ---WORKING || api/projects
router.post('/', (req, res) => {
  Projects.create({
    name: req.body.name,
    user_id: req.session.user_id,
  })
    .then(projectData => res.json(projectData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// put update project data   ---WORKING  || api/projects
router.put('/', (req, res) => {
  Projects.update(
    {name: req.body.projectName},
    {
      where: {
        id: req.body.projectId,
      },
    }
  )
    .then(projectData => {
      if (!projectData) {
        res.status(404).json({message: 'There was no project found with this id.'});
        return;
      }
      console.log(projectData);
      res.json(projectData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a project  ---WORKING || api/projects/:id
router.delete('/:id', (req, res) => {
  Projects.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(projectData => {
      if (!projectData) {
        res.status(404).json({message: 'There was no card found with this id.'});
        return;
      }
      res.json(projectData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

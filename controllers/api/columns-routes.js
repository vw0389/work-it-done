const router = require('express').Router();
const {Projects, Cards, Columns} = require('../../models');
const sequelize = require('../../config/connection');

// model: columns: name, FK(project_id)

// get all columns
router.get('/', (req, res) =>
  Columns.findAll()
  .then(dbPostData =>
    res.json(dbPostData)).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
)

// get all columns for a project ---WORKING
router.get('/:projectId', (req, res) => {
  Columns.findAll({
    where: {
      project_id: req.params.projectId,
    },
  }).then(dbPostData =>
    res.json(dbPostData)).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
});

// post create new column
router.post('/columns', (req, res) => {
  console.log(req.body);
  Projects.create({
    name: req.body.name,
    project_id: req.body.columnId,
  }).then(dbPostData =>
    res.json(dbPostData).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  );
});

// put update columns within project
router.put('/columns/:projectId', (req, res) => {
  console.log(req.body);
  Projects.update(
    {
      name: req.body.name,
    },
    {
      where: {
        project_id: req.body.projectId,
      },
    }
  ).then(dbPostData =>
    res.json(dbPostData).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  );
});

module.exports = router;

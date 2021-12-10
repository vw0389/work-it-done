const router = require('express').Router();
const {Projects, Cards, Columns} = require('../../models');
const sequelize = require('../../config/connection');

// model: columns: name, FK(project_id)

// get all columns ---WORKING
router.get('/', (req, res) =>
  Columns.findAll()
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
);
// 
// get all columns for a project ---WORKING
router.get('/:projectId', (req, res) => {
  Columns.findAll({
    where: {
      project_id: req.params.projectId,
    },
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({message: 'There was no column found with this id.'});
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post create new column   ---WORKING
router.post('/', (req, res) => {
  console.log(req.body);
  Columns.create({
    name: req.body.name,
  }).then(dbPostData =>
    res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// put update columns within project   ---WORKING
router.put('/:id', (req, res) => {
  Columns.update(req.body, {
    where: {
      id: req.params.id,
    },
  }
  ).then(dbPostData => {
    if (!dbPostData) {
      res.status(404)
        .json({ message: 'There was no column found with this id.' });
      return;
    }
    console.log(dbPostData)
    res.json(dbPostData)
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({message: 'There was no column found with this id.'});
        return;
      }
      console.log(dbPostData);
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a column  ---NOt WORKING
router.delete('/:id', (req, res) => {
  Columns.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({message: 'There was no column found with this id.'});
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

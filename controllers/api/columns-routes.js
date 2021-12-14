const router = require('express').Router();
const {Columns} = require('../../models');

/* Model: columns: name, FK(project_id) */


// get all columns ---WORKING || api/columns
router.get('/', (req, res) =>
  
  Columns.findAll()
    .then(columnData => res.json(columnData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
);

// get all columns for a project ---WORKING || api/columns/:id
router.get('/:id', (req, res) => {
  Columns.findAll({
    where: {
      project_id: req.params.id,
    },
  })
    .then(columnData => {
      if (!columnData) {
        res.status(404).json({message: 'There was no column found with this id.'});
        return;
      }
      res.json(columnData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// post create new column ---WORKING || api/columns
router.post('/', (req, res) => {
  Columns.create({
    name: req.body.name,
    project_id: req.body.project_id,
  })
    .then(columnData => res.json(columnData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});


// put update columns within project ---WORKING || api/columns/:id
router.put('/:id', (req, res) => {
  Columns.update(req.body, {
    where: {
      id: req.params.id,
    },
  })
    .then(columnData => {
      if (!columnData) {
        res.status(404).json({message: 'There was no column found with this id.'});
        return;
      }
      console.log(columnData);
      res.json(columnData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// Delete a column  ---NOt WORKING || api/columns:id
router.delete('/:id', (req, res) => {
  Columns.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(columnData => {
      if (!columnData) {
        res.status(404).json({message: 'There was no column found with this id.'});
        return;
      }
      res.json(columnData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

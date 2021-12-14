const router = require('express').Router();
const {Projects, Columns, Cards, Users} = require('../../models');
const sequelize = require('../../config/connection');

// model: cards: name, text, FK(column_id)

// get all cards ---WORKING
router.get('/', (req, res) => {
  Cards.findAll()
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get card by id ---WORKING
router.get('/:id', (req, res) => {
  Cards.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(dbPostData => {
      console.log(dbPostData);
      if (!dbPostData) {
        res.status(404).json({message: 'There was no card found with this id.'});
        return;
      }
      res.json(dbPostData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get all cards for a column  ---NOT WORKING
router.get('/:columnId', (req, res) => {
  console.log('coulumn id !!!!!!!!!!!!', req.params.columnId)
  Cards.findAll({
    where: {
      column_id: req.params.columnId,
    },
   // include: [{model: Cards}]
  }).then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post add cards to column  ---WORKING
router.post('/', (req, res) => {
  console.log(req.body);
  Cards.create({
    name: req.body.name,
    column_id: req.body.column_id,
  })
    .then(dbPostData => res.json(dbPostData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// put update card  ---WORKING
router.put('/', (req, res) => {
  Cards.update(req.body, {
    where: {
      id: req.body.id,
    },
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({message: 'There was no card found with this id.'});
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

// delete a card  ---WORKING
router.delete('/:id', (req, res) => {
  Cards.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(dbPostData => {
      if (!dbPostData) {
        res.status(404).json({message: 'There was no card found with this id.'});
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

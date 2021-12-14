const router = require('express').Router();
const {Cards} = require('../../models');

/* Model: cards: name, text, FK(column_id) */

// get all cards ---WORKING || api/cards
router.get('/', (req, res) => {
  Cards.findAll()
    .then(cardData => res.json(cardData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// get card by id ---WORKING || api/cards/:id
router.get('/:id', (req, res) => {
  Cards.findOne({
    where: {
      id: req.params.id,
    },
  })
    .then(cardData => {
      if (!cardData) {
        res.status(404).json({message: 'There was no card found with this id.'});
        return;
      }
      res.json(cardData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// post add cards to column  ---WORKING  || api/cards
router.post('/', (req, res) => {
  console.log(req.body);
  Cards.create({
    name: req.body.name,
    column_id: req.body.column_id,
  })
    .then(cardData => res.json(cardData))
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// put update card  ---WORKING || api/cards
router.put('/', (req, res) => {
  Cards.update(req.body, {
    where: {
      id: req.body.id,
    },
  })
    .then(cardData => {
      if (!cardData) {
        res.status(404).json({message: 'There was no card found with this id.'});
        return;
      }
      console.log(cardData);
      res.json(cardData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

// delete a card  ---WORKING || api/cards/:id
router.delete('/:id', (req, res) => {
  Cards.destroy({
    where: {
      id: req.params.id,
    },
  })
    .then(cardData => {
      if (!cardData) {
        res.status(404).json({message: 'There was no card found with this id.'});
        return;
      }
      res.json(cardData);
    })
    .catch(err => {
      console.log(err);
      res.status(500).json(err);
    });
});

module.exports = router;

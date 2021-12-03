const router = require('express').Router();
const {Projects, Columns, Cards} = require('../../models');
const sequelize = require('../../config/connection');
// const withAuth = require('../../utils/auth');

// model: cards: name, text, FK(column_id)

// get all cards for a column
router.get('/cards/:column', (req, res) => {
  Projects.findAll({
    where: {
      columns_id: req.params.columnId,
    },
  }).then(dbPostData =>
    res.json(dbPostData).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  );
});

// post add cards to column
router.post('/cards', (req, res) => {
  console.log(req.body);
  Projects.create({
    name: req.body.name,
    text: req.body.text,
    column_id: req.body.columnId,
  }).then(dbPostData =>
    res.json(dbPostData).catch(err => {
      console.log(err);
      res.status(500).json(err);
    })
  );
});

// put update move card between columns
router.put('/cards/:id', (req, res) => {
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
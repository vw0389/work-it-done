const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', {info: 'Hello!'});
});

module.exports = router;

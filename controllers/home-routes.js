const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', {info: 'Hello!'});
  debugger;
});

module.exports = router;

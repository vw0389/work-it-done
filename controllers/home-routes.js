const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage', {info: 'Hello!'});
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', {projects});
});

module.exports = router;

const router = require('express').Router();

router.get('/', (req, res) => {
  res.render('homepage');
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard');
});
module.exports = router;

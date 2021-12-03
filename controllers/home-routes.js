const router = require('express').Router();

// TJ's Test Data
const projects = require('../test-data');

router.get('/', (req, res) => {
  res.render('homepage', {info: 'Hello!'});
});

router.get('/login', (req, res) => {
  res.render('login');
});

router.get('/dashboard', (req, res) => {
  res.render('dashboard', {projects});
});

router.get('/project/:id', (req, res) => {
  const project = projects[req.params.id + 1];
  res.render('project', {project});
});

module.exports = router;

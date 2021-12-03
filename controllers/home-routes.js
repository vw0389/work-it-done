const router = require('express').Router();

// TJ's Test Data
const projects = require('../test-data');

router.get('/', (req, res) => {
  res.render('homepage', {info: 'Hello!'});
});

router.get('/workspace', (req, res) => {
  res.render('workspace', {projects});
});

router.get('/project/:id', (req, res) => {
  const project = projects[req.params.id + 1];
  res.render('project', {project});
});

module.exports = router;

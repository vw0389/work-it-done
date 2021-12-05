const router = require('express').Router();

const columnsRoutes = require('./columns-routes');
const cardsRoutes = require('./cards-routes');
const usersRoutes = require('./users-routes');
const projectsRoutes = require('./projects-routes');

router.use('/projects', projectsRoutes);
router.use('/columns', columnsRoutes);
router.use('/cards', cardsRoutes);
router.use('/users', usersRoutes);

module.exports = router;

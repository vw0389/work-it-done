const router = require('express').Router();

const homeRoutes = require('./home-routes');
const projectRoutes = require('./projects-routes');
const columnsRoutes = require('./columns-routes');
const cardsRoutes = require('./cards-routes');
const cardsRoutes = require('./users-routes');

router.use('/', homeRoutes);
router.use('/api/project-routes', projectRoutes);
router.use('/api/columns-routes', columnsRoutes);
router.use('/api/cards-routes', cardsRoutes);
router.use('/api/users-routes', cardsRoutes);

module.exports = router;

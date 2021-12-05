const router = require('express').Router();

const homeRoutes = require('./home-routes');
const workspaceRoutes = require('./workspace-routes');
const apiRoutes = require('./api');

router.use('/', homeRoutes);
router.use('/workspace', workspaceRoutes);
router.use('/api', apiRoutes);

module.exports = router;
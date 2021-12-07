const router = require('express').Router();

const homeRoutes = require('./home-routes');
const workspaceRoutes = require('./workspace-routes');
const apiRoutes = require('./api');
const loginRoutes = require('./login');

router.use('/', homeRoutes);
router.use('/workspace', workspaceRoutes);
router.use('/',loginRoutes);
router.use('/api', apiRoutes);

module.exports = router;
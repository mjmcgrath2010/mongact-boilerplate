const router = require('express').Router();
const controller = require('./controller');
const { localAuth, tokenAuth } = require('../utils/auth');

router.route('/').post(localAuth, controller.post);

router.route('/check-token').post(tokenAuth, controller.checkAuth);

module.exports = router;

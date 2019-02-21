const router = require('express').Router();
const controller = require('./controller');
const { auth, isAuthenticated } = require('../utils/index');

router.route('/').post(auth, controller.post);

router.route('/check-token').post(isAuthenticated, controller.checkAuth);

module.exports = router;

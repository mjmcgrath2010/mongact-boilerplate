const router = require('express').Router();
const passport = require('passport');
const controller = require('./controller');
const { auth } = require('../utils');

router.route('/').post(auth, controller.post);

router
  .route('/check-token')
  .post(passport.authenticate('jwt', { session: false }), controller.checkAuth);

module.exports = router;

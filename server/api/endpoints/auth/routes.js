const router = require('express').Router();
const passport = require('passport');
const controller = require('./controller');

router.route('/').post(
  passport.authenticate('local', {
    usernameField: 'email',
  }),
  controller.post,
);

router
  .route('/check-token')
  .post(passport.authenticate('jwt', { session: false }), controller.checkAuth);

module.exports = router;

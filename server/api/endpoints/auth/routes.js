const router = require('express').Router();
const passport = require('passport');
const controller = require('./controller');

router.route('/').post(
  passport.authenticate('local', {
    usernameField: 'email',
  }),
  controller.post
);

module.exports = router;

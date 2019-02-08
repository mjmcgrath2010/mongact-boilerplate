const router = require('express').Router();
const passport = require('passport');

router.route('/').post(
  passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login',
  }),
);

module.exports = router;

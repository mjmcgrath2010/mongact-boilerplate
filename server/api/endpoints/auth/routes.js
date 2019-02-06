const router = require('express').Router();
const passport = require('passport');
const initPassport = require('../../services/passport');
// const controller = require('./controller');

router.route('/').post(
  initPassport,
  passport.authenticate('local', {
    successRedirect: '/admin',
    failureRedirect: '/login',
  })
);

module.exports = router;

const router = require('express').Router();
const passport = require('passport');
const endpoints = require('./endpoints');
const passportServices = require('./services/passport');

passportServices.local();
passportServices.jwt();

passport.serializeUser((user, done) => {
  done(null, user);
});
passport.deserializeUser((user, done) => {
  done(null, user);
});

router.use('/endpoints', endpoints);

module.exports = router;

const router = require('express').Router();
const endpoints = require('./endpoints');
const passport = require('./services/passport');

passport.local();
passport.jwt();

router.use('/endpoints', endpoints);

module.exports = router;

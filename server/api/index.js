const router = require('express').Router();
const endpoints = require('./endpoints');
const initPassport = require('./services/passport');

initPassport();

router.use('/endpoints', endpoints);

module.exports = router;

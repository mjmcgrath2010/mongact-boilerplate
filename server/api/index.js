const router = require('express').Router();
const endpoints = require('./endpoints');
const passportServices = require('./services/passport');

passportServices.local();
passportServices.jwt();
passportServices.init();

router.use('/endpoints', endpoints);

module.exports = router;

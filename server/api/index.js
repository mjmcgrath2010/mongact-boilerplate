const router = require('express').Router();
const endpoints = require('./endpoints');

router.use('/endpoints', endpoints);

module.exports = router;

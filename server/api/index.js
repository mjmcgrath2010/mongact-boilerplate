const router = require('express').Router();
const endpoints = require('./endpoints');

router.use('/endpoints', endpoints);

router.use('/', (req, res) => {
  res.send('Hello');
});

module.exports = router;

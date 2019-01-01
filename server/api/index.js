const router = require('express').Router();
const db = require('mongoose').connection;
const database = require('./services/mongoose');
const endpoints = require('./endpoints');

router.use(database);

db.once('open', () => {
  // Set up API routes
  router.use('/endpoints', endpoints);
});

module.exports = router;

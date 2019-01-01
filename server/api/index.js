const router = require('express').Router();
const db = require('mongoose').connection;
const database = require('./services/mongoose');

router.use(database);

db.once('open', () => {
  // Set up API routes
});

module.exports = router;

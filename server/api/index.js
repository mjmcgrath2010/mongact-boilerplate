const router = require('express').Router();
const database = require('./services/mongoose');

router.use(database);

module.exports = router;

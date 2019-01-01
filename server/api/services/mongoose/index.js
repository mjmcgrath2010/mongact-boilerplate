const mongoose = require('mongoose');
const config = require('../../config');
const dbHost = config && config.db && config.db.url;

module.exports = (req, res, next) =>
  mongoose
    .connect(dbHost)
    .then(next())
    .catch(err => next(err));

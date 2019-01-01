const mongoose = require('mongoose');
const config = require('../../config');

module.exports = (req, res, next) =>
  mongoose
    .connect(config.db.url)
    .then(next())
    .catch(err => next(err));

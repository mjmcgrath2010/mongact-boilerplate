const mongoose = require('mongoose');
const serverConfig = require('../../config');
const dbHost = serverConfig && serverConfig.db && serverConfig.db.url;

module.exports = (req, res, next) =>
  mongoose
    .connect(dbHost)
    .then(next())
    .catch(err => next(err));

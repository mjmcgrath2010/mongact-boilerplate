/* eslint-disable global-require */

/**
 * Server middleware
 */
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const override = require('method-override');

module.exports = app => {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(override());
  return app;
};

/* eslint-disable global-require */

/**
 * Server middleware
 */
const morgan = require('morgan');
const bodyParser = require('body-parser');
const cors = require('cors');
const override = require('method-override');
const passport = require('passport');
const session = require('express-session');

module.exports = app => {
  app.use(morgan('dev'));
  app.use(bodyParser.urlencoded({ extended: true }));
  app.use(bodyParser.json());
  app.use(cors());
  app.use(override());
  app.use(session({ secret: 'cats' }));
  app.use(passport.initialize());
  app.use(passport.session());
  return app;
};

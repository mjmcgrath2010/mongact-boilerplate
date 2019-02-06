const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../endpoints/user/model');

module.exports = (req, res, next) => {
  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false, { message: 'Incorrect username.' });
        }
        if (!user.validPassword(password)) {
          return done(null, false, { message: 'Incorrect password.' });
        }
        /* eslint-disable next-line */
        passport.serializeUser((user, done) => {
          done(null, user);
        });
        /* eslint-disable next-line */
        passport.deserializeUser((user, done) => {
          done(null, user);
        });
        return done(null, user);
      });
    }, null)
  );
  next();
};

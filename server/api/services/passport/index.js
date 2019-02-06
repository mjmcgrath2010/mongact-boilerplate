const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const User = require('../../endpoints/user/model');

module.exports = () => {
  passport.serializeUser((user, done) => {
    done(null, user);
  });
  passport.deserializeUser((user, done) => {
    done(null, user);
  });

  passport.use(
    new LocalStrategy((username, password, done) => {
      User.findOne({ username }, (err, user) => {
        if (err) {
          return done(err);
        }
        if (!user) {
          return done(null, false);
        }
        if (!user.validPassword(password)) {
          console.log(user.validPassword(password));
          return done(null, false);
        }
        return done(null, user);
      });
    }),
  );
};

const passport = require('passport');
const LocalStrategy = require('passport-local').Strategy;
const JwtStrategy = require('passport-jwt').Strategy;
const { ExtractJwt } = require('passport-jwt');
const User = require('../../endpoints/user/model');

exports.local = () => {
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
          return done(null, false);
        }
        return done(null, user);
      });
    }),
  );
};

exports.jwt = () => {
  const opts = {};
  opts.jwtFromRequest = ExtractJwt.fromExtractors([
    ExtractJwt.fromBodyField('token'),
    ExtractJwt.fromHeader('X-Token'),
  ]);
  opts.secretOrKey = 'secret';
  passport.use(
    new JwtStrategy(opts, (jwtPayload, done) => {
      User.findOne({ id: jwtPayload.sub }, (err, user) => {
        if (err) {
          return done(err, false);
        }
        if (user) {
          return done(null, user);
        }
        return done(null, false);
        // or you could create a new account
      });
    }),
  );
};

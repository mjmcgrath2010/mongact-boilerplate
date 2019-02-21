const passport = require('passport');

module.exports = {
  auth: (req, res, next) => {
    passport.authenticate(
      'local',
      {
        usernameField: 'email',
      },
      next(),
    );
  },
  isAuthenticated: (req, res, next) => {
    passport.authenticate('jwt', { session: false }, next());
  },
  isAdmin: (req, res, next) =>
    // if (req.user && req.user.admin) {
    //   return next();
    // }
    next(),
  // return res.status(401).json({
  //   error: 'User is not an admin',
  // });
};

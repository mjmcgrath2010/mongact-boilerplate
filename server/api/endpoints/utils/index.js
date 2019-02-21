const passport = require('passport');

module.exports = {
  auth: (req, res, next) => {
    passport.authenticate(
      'local',
      {
        usernameField: 'email',
        session: false,
      },
      next(),
    );
  },
  isAuthenticated: passport.authenticate('jwt', { session: false }),
  isAdmin: (req, res, next) => {
    if (req.user && req.user.admin) {
      return next();
    }
    return res.status(401).json({
      error: 'User is not an admin',
    });
  },
};

module.exports = {
  isAuthenticated: (req, res, next) => {
    if (req.user) {
      return next();
    }
    return res.status(401).json({
      error: 'User not authenticated',
    });
  },
  isAdmin: (req, res, next) => {
    if (req.user && req.user.admin) {
      return next();
    }
    return res.status(401).json({
      error: 'User is not an admin',
    });
  },
};

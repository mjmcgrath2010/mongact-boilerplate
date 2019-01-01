const User = require('./model');

exports.params = (req, res, next, id) => {
  User.findById(id)
    .exec()
    .then(
      user => {
        if (!user) {
          next(new Error('No user with that id'));
        } else {
          req.user = user;
          next();
        }
      },
      err => {
        next(err);
      },
    );
};

exports.get = (req, res, next) => {
  next();
};

exports.getOne = (req, res, next) => {
  next();
};

exports.post = (req, res, next) => {
  next();
};

exports.update = (req, res, next) => {
  next();
};

exports.delete = (req, res, next) => {
  next();
};

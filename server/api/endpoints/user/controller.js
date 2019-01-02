const User = require('./model');

exports.params = (req, res, next, id) => {
  User.find({ _id: id }, (err, doc) => {
    if (err) {
      return res.send(err);
    }
    return res.send(doc);
  });
};

exports.get = (req, res) => {
  User.find({}, (err, docs) => {
    if (err) {
      return res.send(JSON.stringify(err));
    }
    return res.send(docs);
  });
};

exports.getOne = (req, res) => {
  if (req.user) {
    return res.send(req.user);
  }
  return res.send([]);
};

exports.post = (req, res, next) => {
  const { username, password } = req.body;

  User.create({ username, password }, (err, doc) => {
    if (err) {
      return next(err);
    }
    return res.send(doc);
  });
};

exports.update = (req, res, next) => {
  next();
};

exports.delete = (req, res, next) => {
  next();
};

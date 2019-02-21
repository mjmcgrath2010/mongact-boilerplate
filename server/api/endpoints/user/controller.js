const User = require('./model');

exports.params = (req, res, next, id) => {
  User.find({ _id: id }, 'username isAdmin', (err, doc) => {
    if (err) {
      return res.send(err);
    }
    req.id = id;
    req.user = doc;
    return next();
  });
};

exports.get = (req, res) => {
  User.find({}, 'username admin', (err, docs) => {
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
  const { username, password, admin } = req.body;

  User.create({ username, password, admin }, (err, doc) => {
    if (err) {
      return next(err);
    }
    return res.send(doc);
  });
};

exports.update = (req, res, next) => {
  next();
};

exports.delete = (req, res) =>
  User.findById({ _id: req.id }, (err, user) => {
    if (err) {
      return res.json(err);
    }
    if (user) {
      return user.remove(error => {
        if (err) {
          return res.json(error);
        }
        return res.send(200);
      });
    }
    return res.send(401);
  });

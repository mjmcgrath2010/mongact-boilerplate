const Christina = require('./model');

exports.params = (req, res, next, id) => {
  Christina.find({ _id: id }, (err, doc) => {
    if (err) {
      return res.send(err);
    }
    req.christina = doc;
    req.id = id;
    return next();
  });
};

exports.getAll = (req, res) => {
  const query = Christina.find({});
  query.exec((err, docs) => {
    if (err) {
      return res.json({ error: err });
    }
    return res.json(docs);
  });
};

exports.getOne = (req, res) => {
  if (req.christina) {
    return res.json(req.christina);
  }
  return res.send([]);
};

exports.post = (req, res, next) => {
  const { name, title, neopet } = req.body;
  const { _id } = req.user;
  Christina.create(
    { author: _id, name, title, neopet },
    (err, doc) => (err ? next(err) : res.send(doc)),
  );
};

exports.update = (req, res) => {
  const { name, title, neopet } = req.body;
  Christina.updateOne({ _id: req.id }, { name, title, neopet }, (err, doc) => {
    if (err) {
      return res.status(404).json({ error: err });
    }
    return res.json(doc);
  });
};

exports.delete = (req, res) =>
  Christina.findById({ _id: req.id }, (err, christina) => {
    if (err) {
      return res.json(err);
    }
    if (christina) {
      return christina.remove(error => {
        if (err) {
          return res.json(error);
        }
        return res.json({ message: `Deleted Christina ${req.id}` });
      });
    }
    return res.send(401);
  });

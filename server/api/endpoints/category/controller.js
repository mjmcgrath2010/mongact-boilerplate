const Category = require('./model');

exports.params = (req, res, next, id) => {
  Category.find({ _id: id }, (err, doc) => {
    if (err) {
      return res.send(err);
    }
    req.category = doc;
    req.id = id;
    return next();
  });
};

exports.getAll = (req, res) => {
  const query = Category.find({});
  query.exec((err, docs) => {
    if (err) {
      return res.json({ error: err });
    }
    return res.json(docs);
  });
};

exports.getOne = (req, res) => {
  if (req.category) {
    return res.json(req.category);
  }
  return res.send([]);
};

exports.post = (req, res, next) => {
  const { name, description } = req.body;
  const { _id } = req.user;
  Category.create(
    { author: _id, name, description },
    (err, doc) => (err ? next(err) : res.send(doc)),
  );
};

exports.update = (req, res) => {
  const { name, description } = req.body;
  Category.updateOne({ _id: req.id }, { name, description }, (err, doc) => {
    if (err) {
      return res.status(404).json({ error: err });
    }
    return res.json(doc);
  });
};

exports.delete = (req, res) =>
  Category.findById({ _id: req.id }, (err, category) => {
    if (err) {
      return res.json(err);
    }
    if (category) {
      return category.remove(error => {
        if (err) {
          return res.json(error);
        }
        return res.json({ message: `Deleted Category ${req.id}` });
      });
    }
    return res.send(401);
  });

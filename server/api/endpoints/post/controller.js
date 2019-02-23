const Post = require('./model');

exports.params = (req, res, next, id) => {
  Post.find({ _id: id }, (err, doc) => {
    if (err) {
      return res.send(err);
    }
    req.post = doc;
    req.id = id;
    return next();
  });
};

exports.getMe = (req, res) => {
  const { _id } = req.user;
  const query = Post.find({ author: _id });
  query.exec((err, docs) => {
    if (err) {
      return res.json({ error: err });
    }
    return res.json(docs);
  });
};

exports.getAll = (req, res) => {
  const query = Post.find({});
  query.populate('author').exec((err, docs) => {
    if (err) {
      return res.json({ error: err });
    }
    return res.json(docs);
  });
};

exports.getOne = (req, res) => {
  if (req.post) {
    return res.json(req.post);
  }
  return res.send([]);
};

exports.post = (req, res, next) => {
  const { title, content, categories } = req.body;
  const { _id } = req.user;
  Post.create(
    { title, content, categories, author: _id },
    (err, doc) => (err ? next(err) : res.send(doc)),
  );
};

exports.update = (req, res) => {
  const { title, content, categories } = req.body;
  Post.updateOne(
    { _id: req.id },
    { title, content, categories },
    (err, doc) => {
      if (err) {
        return res.status(404).json({ error: err });
      }
      return res.json(doc);
    },
  );
};

exports.delete = (req, res) =>
  Post.findById({ _id: req.id }, (err, post) => {
    if (err) {
      return res.json(err);
    }
    if (post) {
      return post.remove(error => {
        if (err) {
          return res.json(error);
        }
        return res.json({ message: `Removed Post ${req.id}` });
      });
    }
    return res.send(401);
  });

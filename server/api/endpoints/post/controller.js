const Post = require('./model');

exports.params = (req, res, next, id) => {
  Post.find({ _id: id }, (err, doc) => {
    if (err) {
      return res.send(err);
    }
    return res.send(doc);
  });
};

exports.get = (req, res) => {
  Post.find({}, (err, docs) => {
    if (err) {
      return res.send(JSON.stringify(err));
    }
    return res.send(docs);
  });
};

exports.getOne = (req, res) => {
  if (req.Post) {
    return res.send(req.Post);
  }
  return res.send([]);
};

exports.post = (req, res, next) => {
  const { title, content, categories } = req.body;
  const { user } = req;
  const { _id } = user;
  Post.create({ title, content, categories, author: _id }, (err, doc) => (err ? next(err) : res.send(doc)));
};

exports.update = (req, res, next) => {
  next();
};

exports.delete = (req, res, next) => {
  next();
};

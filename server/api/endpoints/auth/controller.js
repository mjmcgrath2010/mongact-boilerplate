exports.post = (req, res) => {
  const { username, password } = req.body;
  res.json([{ username, password }]);
};

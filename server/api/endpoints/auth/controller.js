exports.post = (req, res) => {
  if (req.user) {
    const token = req.user.auth();
    const user = {
      username: req.user.username,
      token,
    };
    return res.json(user);
  }
  return res.send(400);
};

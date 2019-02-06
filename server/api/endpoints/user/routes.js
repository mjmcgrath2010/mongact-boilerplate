const router = require('express').Router();
const controller = require('./controller');

// setup boilerplate route just to satisfy a request
// for building
router.param('id', controller.params);

const isAuthenticated = (req, res, next) => {
  if (req.user) {
    return next();
  }
  return res.status(401).json({
    error: 'User not authenticated',
  });
};

router
  .route('/')
  .get(isAuthenticated, controller.get)
  .post(controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;

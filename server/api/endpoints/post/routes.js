const router = require('express').Router();
const controller = require('./controller');
const { isAdmin, isAuthenticated } = require('../utils');

// setup boilerplate route just to satisfy a request
// for building
router.param('id', controller.params);

router
  .route('/')
  .get(controller.get)
  .post(isAuthenticated, controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .put(isAuthenticated, controller.update)
  .delete(isAuthenticated, isAdmin, controller.delete);

module.exports = router;

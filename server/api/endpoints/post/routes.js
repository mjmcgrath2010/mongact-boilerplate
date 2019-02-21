const router = require('express').Router();
const controller = require('./controller');
const { isAdmin, tokenAuth } = require('../utils/auth');

// setup boilerplate route just to satisfy a request
// for building
router.param('id', controller.params);

router
  .route('/')
  .get(controller.get)
  .post(tokenAuth, controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .put(tokenAuth, controller.update)
  .delete(tokenAuth, isAdmin, controller.delete);

module.exports = router;

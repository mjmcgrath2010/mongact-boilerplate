const router = require('express').Router();
const controller = require('./controller');
const { isAdmin, tokenAuth } = require('../utils/auth');

router.param('id', controller.params);

router
  .route('/')
  .get(controller.getAll)
  .post(tokenAuth, controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .put(tokenAuth, controller.update)
  .delete(tokenAuth, isAdmin, controller.delete);

module.exports = router;

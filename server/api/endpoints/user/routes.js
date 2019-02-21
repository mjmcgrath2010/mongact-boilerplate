const router = require('express').Router();
const passport = require('passport');

const controller = require('./controller');
const { isAdmin } = require('../utils');

// setup boilerplate route just to satisfy a request
// for building

router.param('id', controller.params);

router
  .route('/')
  .get(passport.authenticate('jwt', { session: false }), controller.get)
  .post(
    passport.authenticate('jwt', { session: false }),
    isAdmin,
    controller.post,
  );

router
  .route('/:id')
  .get(controller.getOne)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;

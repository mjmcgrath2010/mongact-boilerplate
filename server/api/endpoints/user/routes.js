const router = require('express').Router();

const controller = require('./controller');
const { isAdmin, tokenAuth } = require('../utils/auth');

// setup boilerplate route just to satisfy a request
// for building

router.param('id', controller.params);

router
  .route('/')
  /**
   * @api {get} /user/:id Request User information
   * @apiName Get Users
   * @apiGroup User
   *
   * @apiParam {Number} id Users unique ID.
   *
   * @apiSuccess {String} _id Id of the User.
   * @apiSuccess {String} username  Username of the User.
   *
   * @apiSuccessExample Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "_id": "12345tefwq234dfwavr431rt4g",
   *       "username": "joe@example.com",
   *     }
   *
   * @apiError UserNotFound The id of the User was not found.
   *
   * @apiErrorExample Error-Response:
   *     HTTP/1.1 404 Not Found
   *     {
   *       "error": "User Not Found"
   *     }
   */
  .get(tokenAuth, isAdmin, controller.get)
  .post(controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;

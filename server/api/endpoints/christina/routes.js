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

// //////////////////////////////////////////////
//               PUT REQUEST                   //
// //////////////////////////////////////////////

/**
 * @api {put} /christina/:id Change a new Christina
 * @apiName PutChristina
 * @apiGroup Christina
 * @apiPermission User
 *
 * @apiParam {String} token Access Token of the User.
 *
 * @apiParam {id} id ID of the Christina.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "12345tefwq234dfwavr431rt4g",
 *       "updated": "true",
 *     }
 *
 *
 * @apiError 404 The id of the Christina was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "Christina Not Found"
 *     }
 */

// //////////////////////////////////////////////
//               POST REQUEST                  //
// //////////////////////////////////////////////

/**
 * @api {post} /christina Create a new Christina
 * @apiName PostChristina
 * @apiGroup Christina
 * @apiPermission Admin
 *
 *
 *
 * @apiParam {String} name Name of the .
 *
 * @apiParam {String} title Title of the .
 *
 * @apiParam {String} neopet Neopet of the .
 *
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "12345tefwq234dfwavr431rt4g",
 *       "name": "value",
 *       "title": "value",
 *       "neopet": "value",
 *
 *     }
 *
 * @apiError Error The user is not an admin.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Not Found
 *     {
 *       "error": "User is not Admin."
 *     }
 *
 */

// //////////////////////////////////////////////
//               GET ONE REQUEST               //
// //////////////////////////////////////////////

/**
 * @api {get} /christina/:id Get Christina information
 * @apiName GetChristina
 * @apiGroup Christina
 * @apiPermission User
 *
 * @apiHeader (Headers) {String} X-Token API Access Token.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "12345tefwq234dfwavr431rt4g",
 *       "name": "value",
 *       "title": "value",
 *       "neopet": "value",
 *
 *     }
 *
 * @apiError 404 The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User Not Found"
 *     }
 */

// //////////////////////////////////////////////
//               GET REQUEST                   //
// //////////////////////////////////////////////

/**
 * @api {get} /user Get Christinas information
 * @apiName GetChristinas
 * @apiGroup Christina
 * @apiPermission Admin
 *
 * @apiHeader (Headers) {String} X-Token API Acess Token.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *     {
 *       "_id": "12345tefwq234dfwavr431rt4g",
 *       "name": "value",
 *       "title": "value",
 *       "neopet": "value",
 *
 *     },
 *     {
 *       "_id": "12345tefwq2rewwe34dfwavr431rt4g",
 *       "name": "value",
 *       "title": "value",
 *       "neopet": "value",
 *
 *     }
 *     ....
 *    ]
 *
 * @apiError Error The user is not an admin.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 401 Not Found
 *     {
 *       "error": "User is not Admin."
 *     }
 *
 */

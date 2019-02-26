const router = require('express').Router();

const controller = require('./controller');
const { isAdmin, tokenAuth } = require('../utils/auth');

router.param('id', controller.params);

router
  .route('/')
  .get(tokenAuth, isAdmin, controller.get)
  .post(controller.post);

router
  .route('/:id')
  .get(controller.getOne)
  .put(controller.update)
  .delete(controller.delete);

module.exports = router;

// //////////////////////////////////////////////
//               GET REQUEST                   //
// //////////////////////////////////////////////

/**
 * @api {get} /user Get Users information
 * @apiName GetUsers
 * @apiPermission admin
 * @apiGroup Admin
 *
 * @apiHeader (Headers) {String} X-Token API Acess Token.
 *
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *    [
 *     {
 *       "_id": "12345tefwq234dfwavr431rt4g",
 *       "username": "joe@example.com",
 *     },
 *     {
 *       "_id": "12345tefwq2rewwe34dfwavr431rt4g",
 *       "username": "john@example.com",
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

// //////////////////////////////////////////////
//               POST REQUEST                  //
// //////////////////////////////////////////////

/**
 * @api {post} /user Create a new User
 * @apiName PostUser
 * @apiGroup User
 * @apiPermission Admin
 *
 * @apiDescription In this case "apiUse" is defined and used.
 * Define blocks with params that will be used in several functions, so you dont have to rewrite them.
 *
 * @apiParam {String} username Userame of the User.
 * @apiParam {String} password Password of the User.
 * @apiParam {String} token Access Token of the User.
 *
 * @apiSuccessExample Success-Response:
 *     HTTP/1.1 200 OK
 *     {
 *       "_id": "12345tefwq234dfwavr431rt4g",
 *       "username": "joe@example.com",
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
 * @api {get} /user/:id Get User information
 * @apiName GetUser
 * @apiPermission admin
 * @apiGroup User
 *
 * @apiHeader (Headers) {String} X-Token API Acess Token.
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
 * @apiError 404 The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User Not Found"
 *     }
 */

// //////////////////////////////////////////////
//               PUT REQUEST                   //
// //////////////////////////////////////////////

/**
 * @api {put} /user/:id Change a new User
 * @apiName PutUser
 * @apiGroup User
 * @apiPermission User
 *
 * @apiDescription This function has same errors like POST /user, but errors not defined again, they were included with "apiUse"
 *
 * @apiParam {id} id ID of the User.
 *
 * @apiError 404 The id of the User was not found.
 *
 * @apiErrorExample Error-Response:
 *     HTTP/1.1 404 Not Found
 *     {
 *       "error": "User Not Found"
 *     }
 */

const { Router } = require('express')
const validate = require('express-validation')
const guard = require('express-jwt')

const userParam = require('./user.param')
const userCtrl = require('./user.controller')
const env = require('../../config/environment')

const router = Router()

router.route('/')
  /**
   * @api {get} /api/users List Users
   * @apiName List Users
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam none
   *
   * @apiSuccess {Object[]} users               List of users
   * @apiSuccess {String}   users.id            Users unique Id
   * @apiSuccess {String}   users.userName      Username of user
   * @apiSuccess {String}   users.fullName      Username of user
   * @apiSuccess {String}   users.mobileNumber  Username of user
   *
   *
   * @apiError {Object} error Error response
   */
  .get(validate(userParam.list), userCtrl.list)

/**
   * @api {post} /api/users Create User
   * @apiName Create User
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam (body) {String} userName     Username of user
   * @apiParam (body) {String} fullName     Fullname  of user
   * @apiParam (body) {String} mobileNumber Mobile number of user
   * @apiParam (body) {String} password     Password of user
   *
   * @apiSuccess {Object} user              Newly created user details
   * @apiSuccess {String} user.id           Newly created user
   * @apiSuccess {String} user.userName     Newly created user
   * @apiSuccess {String} user.fullName     Newly created user
   * @apiSuccess {String} user.mobileNumber Newly created user
   *
   * @apiError {Object} error Error response
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *       "userName": "John",
   *       "fullName": "Doe",
   *       "mobileNumber": "+8801754556589"
   *     }
*/
  .post(validate(userParam.create), userCtrl.create)

router.route('/:userId')
  /**
   * @api {get} /api/users/:userId Get User
   * @apiName Get User
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} userId id of user
   *
   * @apiSuccess {Object} user              Details of user
   * @apiSuccess {String} user.userName     Username of user
   * @apiSuccess {String} user.fullName     Fullname of user
   * @apiSuccess {String} user.mobileNumber Mobile number of user
   *
   *
   *
   * @apiError {Object} error Error response
   */
  .get(
    validate(userParam.get),
    userCtrl.get
  )

  /**
   * @api {put} /api/users/:userId Update User
   * @apiName Update User
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} userId id of user
   *
   *
   * @apiParam (body) {String} userName     Username of user
   * @apiParam (body) {String} fullName     Fullname of user
   * @apiParam (body) {String} mobileNumber Mobile number of user
   *
   * @apiSuccess {Object} user              Details of user
   * @apiSuccess {String} user.userName     Username of user
   * @apiSuccess {String} user.fullName     Fullname of user
   * @apiSuccess {String} user.mobileNumber Mobile number of user
   *
   *
   * @apiError {Object} error Error response
   */
  .put(
    guard({ secret: env.jwtSecret, requestProperty: 'auth' }),
    validate(userParam.update),
    userCtrl.update
  )

  /**
   * @api {delete} /api/users/:userId Delete User
   * @apiName Delete User
   * @apiGroup User
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} userId _id of user
   *
   * @apiSuccess {Object} user              Deleted user details
   * @apiSuccess {String} user.userName     Username of user
   * @apiSuccess {String} user.fullName     Fullname of user
   * @apiSuccess {String} user.mobileNumber Mobile number of user
   *
   *
   * @apiError {Object} error Error response
   */
  .delete(
    guard({ secret: env.jwtSecret, requestProperty: 'auth' }),
    validate(userParam.remove),
    userCtrl.remove
  )

/**
 * Load user when API is hit with userId param
 */
router.param('userId', userCtrl.load)

module.exports = router

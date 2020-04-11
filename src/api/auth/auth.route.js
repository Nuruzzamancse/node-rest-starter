const { Router } = require('express')
const validate = require('express-validation')
const authParam = require('./auth.param')
const authCtrl = require('./auth.controller')

const router = Router()

router.route('/login')
  /**
   * @api {post} /api/auth/login User Login
   * @apiName User Login
   * @apiGroup Auth
   * @apiVersion 1.0.0
   *
   * @apiParam (body) {String} mobileNumber Mobile number of user
   * @apiParam (body) {String} password     Password of user
   *
   * @apiSuccess {String} token JWT token
   * @apiSuccess {Object} user              Details of user
   * @apiSuccess {String} user.userName     Username of user
   * @apiSuccess {String} user.fullName     Fullname of user
   * @apiSuccess {String} user.mobileNumber Mobile number of user
   *
   *
   * @apiError {Object} error Error response
   */
  .post(validate(authParam.login), authCtrl.login)

module.exports = router

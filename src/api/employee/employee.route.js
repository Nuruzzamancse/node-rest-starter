const { Router } = require('express')
const validate = require('express-validation')
const guard = require('express-jwt')

const userParam = require('./employee.param')
const userCtrl = require('./employee.controller')
const env = require('../../config/environment')

const router = Router()

router.route('/')
  /**
   * @api {get} /api/employees List Employees
   * @apiName List Employees
   * @apiGroup Employee
   * @apiVersion 1.0.0
   *
   * @apiParam none
   *
   * @apiSuccess {Object[]} employees               List of employees
   * @apiSuccess {String}   employees.id            Employees unique Id
   * @apiSuccess {String}   employees.userName      Username of employee
   * @apiSuccess {String}   employees.fullName      Username of employee
   * @apiSuccess {String}   employees.mobileNumber  Username of employee
   *
   *
   * @apiError {Object} error Error response
   */
  .get(validate(userParam.list), userCtrl.list)

/**
   * @api {post} /api/employees Create Employee
   * @apiName Create Employee
   * @apiGroup Employee
   * @apiVersion 1.0.0
   *
   * @apiParam (body) {String} userName     Username of employee
   * @apiParam (body) {String} fullName     Fullname  of employee
   * @apiParam (body) {String} mobileNumber Mobile number of employee
   * @apiParam (body) {String} password     Password of employee
   *
   * @apiSuccess {Object} employee              Newly created employee details
   * @apiSuccess {String} employee.id           Newly created employee
   * @apiSuccess {String} employee.userName     Newly created employee
   * @apiSuccess {String} employee.fullName     Newly created employee
   * @apiSuccess {String} employee.mobileNumber Newly created employee
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

router.route('/:employeeId')
  /**
   * @api {get} /api/employees/:employeeId Get Employee
   * @apiName Get Employee
   * @apiGroup Employee
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} employeeId id of employee
   *
   * @apiSuccess {Object} employee              Details of employee
   * @apiSuccess {String} employee.userName     Username of employee
   * @apiSuccess {String} employee.fullName     Fullname of employee
   * @apiSuccess {String} employee.mobileNumber Mobile number of employee
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
   * @api {put} /api/employees/:employeeId Update Employee
   * @apiName Update Employee
   * @apiGroup Employee
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} employeeId id of employee
   *
   *
   * @apiParam (body) {String} userName     Username of employee
   * @apiParam (body) {String} fullName     Fullname of employee
   * @apiParam (body) {String} mobileNumber Mobile number of employee
   *
   * @apiSuccess {Object} employee              Details of employee
   * @apiSuccess {String} employee.userName     Username of employee
   * @apiSuccess {String} employee.fullName     Fullname of employee
   * @apiSuccess {String} employee.mobileNumber Mobile number of employee
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
   * @api {delete} /api/employees/:employeeId Delete Employee
   * @apiName Delete Employee
   * @apiGroup Employee
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} employeeId _id of employee
   *
   * @apiSuccess {Object} employee              Deleted employee details
   * @apiSuccess {String} employee.userName     Username of employee
   * @apiSuccess {String} employee.fullName     Fullname of employee
   * @apiSuccess {String} employee.mobileNumber Mobile number of employee
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
 * Load employee when API is hit with employeeId param
 */
router.param('employeeId', userCtrl.load)

module.exports = router

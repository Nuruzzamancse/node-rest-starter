const { Router } = require('express')
const validate = require('express-validation')
// const guard = require('express-jwt')

const userParam = require('./company.param')
const userCtrl = require('./company.controller')
// const env = require('../../config/environment')

const router = Router()

router.route('/')
  /**
   * @api {get} /api/company List Companies
   * @apiName List Companies
   * @apiGroup Company
   * @apiVersion 1.0.0
   *
   * @apiParam none
   *
   * @apiSuccess {Object[]} companies                             List of companies
   * @apiSuccess {String}   companies.id                          Companies unique Id
   * @apiSuccess {String}   companies.companyName                 Name of company
   * @apiSuccess {String}   companies.companyAddress              Address of company
   * @apiSuccess {enum}     companies.companySector               Secotor of company , like in which secotr company works
   * @apiSuccess {String}   companies.companyDescription          Description of company , like what company does
   * @apiSuccess {String}   companies.numberofEmpoyees            Number of employees of company
   * @apiSuccess {String}   companies.numberOfLocation            Number of location of company
   * @apiSuccess {String}   companies.pointOfContactName          Point of contact name of company
   * @apiSuccess {String}   companies.pointOfContactEmailAddress  Point of contact email address of company
   * @apiSuccess {String}   companies.pointOfContactPhoneNumber   Point of contact phone number of company
   *
   *
   * @apiError {Object} error Error response
   */
  .get(validate(userParam.list), userCtrl.list)

/**
   * @api {post} /api/company Register Company
   * @apiName Register Company
   * @apiGroup Company
   * @apiVersion 1.0.0
   *
   *
   * @apiParam (body) {String}   companyName                       Name of company
   * @apiParam (body) {String}   companyAddress                    Address of company
   * @apiParam (body) {enum ='Academic',
                             'Associations-Professional Services',
                             'Critical Infrastructure',
                             'Entertainment',
                             'Faith-based',
                             'Finance',
                             'Government',
                             'Healthcare',
                             'Hospitality',
                             'Information Technology',
                             'Manufacturing',
                             'Nonprofits',
                             'Retail Commodities',
                            'Transportation'}  companySector          Secotor of company , like in which secotr company works
   * @apiParam (body) {String}   [companyDescription]                   Description of company , like what company does
   * @apiParam (body) {String}   numberofEmpoyees                     Number of employees of company
   * @apiParam (body) {String}   numberOfLocation                     Number of location of company
   * @apiParam (body) {String}   pointOfContactName                   Point of contact name of company
   * @apiParam (body) {String}   pointOfContactEmailAddress           Point of contact email address of company
   * @apiParam (body) {String}   pointOfContactPhoneNumber            Point of contact phone number of company
   *
   * @apiSuccess {Object}   company                     Newly created company
   * @apiSuccess {String}   id                          Companies unique Id
   * @apiSuccess {String}   companyName                 Name of company
   * @apiSuccess {String}   companyAddress              Address of company
   * @apiSuccess {enum}     companySector               Secotor of company , like in which secotr company works
   * @apiSuccess {String}   companyDescription          Description of company , like what company does
   * @apiSuccess {String}   numberofEmpoyees            Number of employees of company
   * @apiSuccess {String}   numberOfLocation            Number of location of company
   * @apiSuccess {String}   pointOfContactName          Point of contact name of company
   * @apiSuccess {String}   pointOfContactEmailAddress  Point of contact email address of company
   * @apiSuccess {String}   pointOfContactPhoneNumber   Point of contact phone number of company
   *
   * @apiError {Object} error Error response
   *
   *
   * @apiSuccessExample {json} Success-Response:
   *     HTTP/1.1 200 OK
   *     {
   *        "companyName":"Natashi",
   *        "companyAddress":"Hello @123, Bangladesh",
   *        "companySector":"Government",
   *        "companyDescription":"No description",
   *        "numberofEmpoyees":"12",
   *        "numberOfLocation": "5",
   *        "pointOfContactName":"Halum Mama",
   *        "pointOfContactEmailAddress":"halum@gmail.com",
   *        "pointOfContactPhoneNumber":"01754552453"
  *     }
*/
  .post(validate(userParam.create), userCtrl.create)

router.route('/:companyId')
  /**
   * @api {get} /api/company/:companyId Get Company
   * @apiName Get Company
   * @apiGroup Company
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} companyId id of company
   *
   * @apiSuccess {Object}   company                             Details of company
   * @apiSuccess {String}   company.id                          Companys unique Id
   * @apiSuccess {String}   company.companyName                 Name of company
   * @apiSuccess {String}   company.companyAddress              Address of company
   * @apiSuccess {enum}     company.companySector               Secotor of company , like in which secotr company works
   * @apiSuccess {String}   company.companyDescription          Description of company , like what company does
   * @apiSuccess {String}   company.numberofEmpoyees            Number of employees of company
   * @apiSuccess {String}   company.numberOfLocation            Number of location of company
   * @apiSuccess {String}   company.pointOfContactName          Point of contact name of company
   * @apiSuccess {String}   company.pointOfContactEmailAddress  Point of contact email address of company
   * @apiSuccess {String}   company.pointOfContactPhoneNumber   Point of contact phone number of company
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
   * @api {put} /api/company/:companyId Update Company
   * @apiName Update Company
   * @apiGroup Company
   * @apiVersion 1.0.0
   *
   * @apiParam (param) {String} companyId id of company
   *
   *
   * @apiParam (Login) {String}   companyName                       Name of company
   * @apiParam (Login) {String}   companyAddress                    Address of company
   * @apiParam (Login) {enum ='Academic',
                             'Associations-Professional Services',
                             'Critical Infrastructure',
                             'Entertainment',
                             'Faith-based',
                             'Finance',
                             'Government',
                             'Healthcare',
                             'Hospitality',
                             'Information Technology',
                             'Manufacturing',
                             'Nonprofits',
                             'Retail Commodities',
                            'Transportation'}  companySector          Secotor of company , like in which secotr company works
   * @apiParam (Login) {String}   companyDescription                   Description of company , like what company does
   * @apiParam (Login) {String}   numberofEmpoyees                     Number of employees of company
   * @apiParam (Login) {String}   numberOfLocation                     Number of location of company
   * @apiParam (Login) {String}   pointOfContactName                   Point of contact name of company
   * @apiParam (Login) {String}   pointOfContactEmailAddress           Point of contact email address of company
   * @apiParam (Login) {String}   pointOfContactPhoneNumber            Point of contact phone number of company
   *
   * @apiSuccess {Object}   company                     Newly created company
   * @apiSuccess {String}   id                          Companies unique Id
   * @apiSuccess {String}   companyName                 Name of company
   * @apiSuccess {String}   companyAddress              Address of company
   * @apiSuccess {enum}     companySector               Secotor of company , like in which secotr company works
   * @apiSuccess {String}   companyDescription          Description of company , like what company does
   * @apiSuccess {String}   numberofEmpoyees            Number of employees of company
   * @apiSuccess {String}   numberOfLocation            Number of location of company
   * @apiSuccess {String}   pointOfContactName          Point of contact name of company
   * @apiSuccess {String}   pointOfContactEmailAddress  Point of contact email address of company
   * @apiSuccess {String}   pointOfContactPhoneNumber   Point of contact phone number of company
   *
   *
   * @apiError {Object} error Error response
   */
  .put(
    // guard({ secret: env.jwtSecret, requestProperty: 'auth' }),
    validate(userParam.update),
    userCtrl.update
  )

  /**
   * @api {delete} /api/company/:companyId Delete Company
   * @apiName Delete Company
   * @apiGroup Company
   * @apiVersion 1.0.0
   *
   * @apiParam (Login) {String} companyId _id of company
   *
   * @apiSuccess {Object} company              Deleted company details
   * @apiSuccess {String}   id                          Companies unique Id
   * @apiSuccess {String}   companyName                 Name of company
   * @apiSuccess {String}   companyAddress              Address of company
   * @apiSuccess {enum}     companySector               Secotor of company , like in which secotr company works
   * @apiSuccess {String}   companyDescription          Description of company , like what company does
   * @apiSuccess {String}   numberofEmpoyees            Number of employees of company
   * @apiSuccess {String}   numberOfLocation            Number of location of company
   * @apiSuccess {String}   pointOfContactName          Point of contact name of company
   * @apiSuccess {String}   pointOfContactEmailAddress  Point of contact email address of company
   * @apiSuccess {String}   pointOfContactPhoneNumber   Point of contact phone number of company
   *
   *
   * @apiError {Object} error Error response
   */
  .delete(
    // guard({ secret: env.jwtSecret, requestProperty: 'auth' }),
    validate(userParam.remove),
    userCtrl.remove
  )

/**
 * Load company when API is hit with companyId param
 */
router.param('companyId', userCtrl.load)

module.exports = router

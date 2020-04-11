/* eslint-disable node/no-unsupported-features/es-syntax */
const _ = require('lodash')
const httpStatus = require('http-status')

const db = require('../../models/index')
const APIError = require('../../libs/APIError')

const CompaniesPublicField =
[
  'id',
  'companyName',
  'companyAddress',
  'companySector',
  'companyDescription',
  'numberofEmpoyees',
  'numberOfLocation',
  'pointOfContactName',
  'pointOfContactEmailAddress',
  'pointOfContactPhoneNumber'
]
/**
 * Load company and append to req object
 */
async function load (req, res, next, id) {
  try {
    req.company = await db.company.findByPk(id)
    return next()
  } catch (e) {
    next(e)
  }
}

/**
 * Get company
 * @property {string} req.params.companyId _id of company
 * @returns {<Company, Error>}
 */
function get (req, res, next) {
  const company = req.company
  const sendCompany = _.pick(company, CompaniesPublicField)
  return res.json(sendCompany)
}

/**
 * Create new company
 *
 *
 * @property {string} req.body.companyName Name of company
 * @property {string} req.body.companyAddress Address of company
 * @property {enum} req.body.companySector Working sector of company
 * @property {string} req.body.companyDescription Description of company , what company does
 * @property {string} req.body.numberofEmpoyees Number of employees of company
 * @property {string} req.body.numberOfLocation Number of location of screening
 * @property {string} req.body.pointOfContactName Pointofconanct name of company
 * @property {string} req.body.pointOfContactEmailAddress Point of email address of company
 * @property {string} req.body.pointOfContactPhoneNumber Point of contact phone number of company
 *
 *
 * @returns {<Company, Error>}
 */
async function create (req, res, next) {
  try {
    const savedUser = await db.company
      .create(_.pick(req.body, CompaniesPublicField))

    console.log(savedUser)
    const sendCompany = _.pick(savedUser, CompaniesPublicField)
    return res.json(sendCompany)
  } catch (e) {
    let err = e
    if (err.code && err.code === 11000) {
      err = new APIError(err.errmsg, httpStatus.BAD_REQUEST, false)
    }
    return next(err)
  }
}

/**
 * Update company
 *
 *
 * @property {string} req.params.companyId _id of company
 * @property {string} req.body.companyName Name of company
 * @property {string} req.body.companyAddress Address of company
 * @property {enum} req.body.companySector Working sector of company
 * @property {string} req.body.companyDescription Description of company , what company does
 * @property {string} req.body.numberofEmpoyees Number of employees of company
 * @property {string} req.body.numberOfLocation Number of location of screening
 * @property {string} req.body.pointOfContactName Pointofconanct name of company
 * @property {string} req.body.pointOfContactEmailAddress Point of email address of company
 * @property {string} req.body.pointOfContactPhoneNumber Point of contact phone number of company
 *
 *
 * @returns {<Company, Error>}
 */
async function update (req, res, next) {
  try {
    const company = req.company
    const updatCompany = _.pick(req.body, CompaniesPublicField)
    Object.keys(updatCompany).map(key => {
      company[key] = updatCompany[key]
    })
    const sendCompany = _.pick(await company.save(), CompaniesPublicField)
    return res.json(sendCompany)
  } catch (e) {
    next(e)
  }
}

/**
 * List users
 * @property {string} req.params.limit number of users to be listed
 * @property {string} req.params.skip number of users to be skipped
 * @returns {<Company[], Error>}
 */
async function list (req, res, next) {
  const result = await db.company.findAll(
    {
      attributes: {
        exclude: ['password']
      }
    }
  )
  return res.json(result)
}

/**
 * Delete company
 * @property {string} req.params.companyId _id of company
 * @returns {<Company, Error>}
 */
async function remove (req, res, next) {
  try {
    const deletedCompany = await db.company
      .destroy({
        where: {
          id: req.params.id
        }
      })
    const sendCompany = _.pick(deletedCompany, CompaniesPublicField)
    return res.json(sendCompany)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  load,
  get,
  create,
  list,
  update,
  remove,
  CompaniesPublicField
}

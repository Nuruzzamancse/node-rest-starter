/* eslint-disable node/no-unsupported-features/es-syntax */
const _ = require('lodash')
const bcrypt = require('bcryptjs')
const httpStatus = require('http-status')

const db = require('../../models/index')
const APIError = require('../../libs/APIError')

const salt = bcrypt.genSaltSync(10)

const UsersPublicField = ['id', 'fullName', 'mobileNumber', 'userName']
/**
 * Load user and append to req object
 */
async function load (req, res, next, id) {
  try {
    req.user = await db.user.findByPk(id)
    return next()
  } catch (e) {
    next(e)
  }
}

/**
 * Get user
 * @property {string} req.params.userId _id of user
 * @returns {<User, Error>}
 */
function get (req, res, next) {
  const user = req.user
  const sendUser = _.pick(user, UsersPublicField)
  return res.json(sendUser)
}

/**
 * Create new user
 * @property {string} req.body.username username of user
 * @property {string} req.body.mobileNumber mobileNumber of user
 * @property {string} req.body.password password of user
 * @returns {<User, Error>}
 */
async function create (req, res, next) {
  try {
    const savedUser = await db.user
      .create({
        userName: req.body.userName,
        mobileNumber: req.body.mobileNumber,
        fullName: req.body.fullName,
        password: bcrypt.hashSync(req.body.password, salt)
      })

    console.log(savedUser)
    const sendUser = _.pick(savedUser, UsersPublicField)
    return res.json(sendUser)
  } catch (e) {
    let err = e
    if (err.code && err.code === 11000) {
      err = new APIError(err.errmsg, httpStatus.BAD_REQUEST, false)
    }
    return next(err)
  }
}

/**
 * Update user
 * @property {string} req.params.userId _id of user
 * @property {string} req.body.mobileNumber mobileNumber of user
 * @returns {<User, Error>}
 */
async function update (req, res, next) {
  try {
    const savedUser = await db.user
      .update(
        {
          mobileNumber: req.body.mobileNumber
        },
        {
          where: {
            id: req.params.id
          }
        }
      )
    const sendUser = _.pick(savedUser, UsersPublicField)
    return res.json(sendUser)
  } catch (e) {
    next(e)
  }
}

/**
 * List users
 * @property {string} req.params.limit number of users to be listed
 * @property {string} req.params.skip number of users to be skipped
 * @returns {<User[], Error>}
 */
async function list (req, res, next) {
  const result = await db.user.findAll(
    {
      attributes: {
        exclude: ['password']
      }
    }
  )
  return res.json(result)
}

/**
 * Delete user
 * @property {string} req.params.userId _id of user
 * @returns {<User, Error>}
 */
async function remove (req, res, next) {
  try {
    const deletedUser = await db.user
      .destroy({
        where: {
          id: req.params.id
        }
      })
    const sendUser = _.pick(deletedUser, UsersPublicField)
    return res.json(sendUser)
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
  UsersPublicField
}

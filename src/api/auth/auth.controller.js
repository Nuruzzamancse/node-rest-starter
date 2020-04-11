const bcrypt = require('bcryptjs')
const httpStatus = require('http-status')
const _ = require('lodash')

const JWToken = require('../../libs/jwToken')
const APIError = require('../../libs/APIError')
const db = require('../../models/index')
const { UsersPublicField } = require('../company/company.controller')
/**
 * Returns jwt token if valid useranme and password is provided
 * @property {string} req.body.username username of user
 * @property {string} req.body.password password of user
 * @returns {<{token, user}, Error>}
 */
async function login (req, res, next) {
  try {
    const user = await db.user.findOne({
      where: {
        mobileNumber: req.body.mobileNumber
      },
      raw: true
    })
    if (bcrypt.compareSync(req.body.password, user.password)) {
      const payload = _.pick(user, UsersPublicField)
      const token = JWToken.create(payload, '20m')
      return res.json({
        token,
        user: _.pick(user, UsersPublicField)
      })
    }
    throw new APIError('Authentication error!', httpStatus.UNAUTHORIZED, true)
  } catch (e) {
    next(e)
  }
}

module.exports = {
  login
}

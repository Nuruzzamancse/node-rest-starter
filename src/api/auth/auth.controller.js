const bcrypt = require('bcryptjs')
const httpStatus = require('http-status')
const _ = require('lodash')

const JWToken = require('../../libs/jwToken')
const APIError = require('../../libs/APIError')
const db = require('../../models/index')
const { UsersPublicField } = require('../user/user.controller')
/**
 * Returns jwt token if valid useranme and password is provided
 * @property {string} req.body.username username of user
 * @property {string} req.body.password password of user
 * @returns {<{token, user}, Error>}
 */
async function login (req, res, next) {
  try {
    const { dataValues } = await db.user.findOne({
      where: {
        mobileNumber: req.body.mobileNumber
      }
    })
    if (bcrypt.compareSync(req.body.password, dataValues.password)) {
      const payload = _.pick(dataValues, UsersPublicField)
      const token = JWToken.create(payload, '20m')
      return res.json({
        token,
        user: _.pick(dataValues, UsersPublicField)
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

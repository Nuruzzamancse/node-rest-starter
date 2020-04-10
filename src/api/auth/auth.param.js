const Joi = require('joi')

module.exports = {
  /**
   * @apiName User Login
   * @apiGroup Auth
   */
  login: {
    body: {
      mobileNumber: Joi.string().required(),
      password: Joi.string().required()
    }
  }
}

const Joi = require('joi')

module.exports = {
  /**
   * @apiName Create Company
   * @apiGroup Company
   */
  create: {
    body: {
      companyName: Joi.string().required(),
      companyAddress: Joi.string().required(),
      companySector: Joi.string().required(),
      companyDescription: Joi.string().required(),
      numberofEmpoyees: Joi.string().required(),
      numberOfLocation: Joi.string().required(),
      pointOfContactName: Joi.string().required(),
      pointOfContactEmailAddress: Joi.string().required(),
      pointOfContactPhoneNumber: Joi.string().required()
    }
  },

  /**
   * @apiName Get Company
   * @apiGroup Company
   */
  get: {
    headers: {
      authorization: Joi.string().required()
    },
    params: {
      companyId: Joi.string().required()
    }
  },

  /**
   * @apiName Update Company
   * @apiGroup Company
   */
  update: {
    // headers: {
    //   authorization: Joi.string().required()
    // },
    params: {
      companyId: Joi.string().required()
    },
    body: {
      companyName: Joi.string().required(),
      companyAddress: Joi.string().required(),
      companySector: Joi.string().required(),
      companyDescription: Joi.string().required(),
      numberofEmpoyees: Joi.string().required(),
      numberOfLocation: Joi.string().required(),
      pointOfContactName: Joi.string().required(),
      pointOfContactEmailAddress: Joi.string().required(),
      pointOfContactPhoneNumber: Joi.string().required()
    }
  },

  /**
   * @apiName List Companies
   * @apiGroup Company
   */
  list: {
    query: {
      skip: Joi.string(),
      limit: Joi.string()
    }
  },

  /**
   * @apiName Delete Company
   * @apiGroup Company
   */
  remove: {
    headers: {
      authorization: Joi.string().required()
    },
    params: {
      companyId: Joi.string().required()
    }
  }
}

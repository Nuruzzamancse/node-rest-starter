const express = require('express')
const companyRoute = require('./api/company/company.route')
const authRoutes = require('./api/auth/auth.route')

const router = express.Router()

/**
 * @api {get} /api Health Check
 * @apiName Health Check
 * @apiGroup API
 * @apiVersion 1.0.0
 *
 * @apiParam none
 *
 * @apiSuccess {String} OK Success Response
 * @apiError {Object} error Error Response
 */
router.get('/', (req, res) => res.send('OK'))

/**
 * @apiDescription Mounts company routes at /company
 * @apiGroup Company
 */
router.use('/company', companyRoute)

/**
 * @apiDescription Mounts auth routes at /auth
 * @apiGroup Auth
 */
router.use('/auth', authRoutes)

module.exports = router

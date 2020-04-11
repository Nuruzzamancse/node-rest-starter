const auth = require('basic-auth')
// const adminService = require('../api/shared/admin/admin.service')

module.exports = async (req, res, next) => {
  try {
    const credentials = auth(req)
    if (!credentials) {
      throw new Error('Authentication required.')
    }

    // const admin = await adminService.authenticate(
    //   credentials.name,
    //   credentials.pass
    // )

    if (credentials.name !== 'admin' && credentials.pass !== 'admin') {
      throw new Error('Shit Man')
    }
    // req.admin = admin
    next()
  } catch (error) {
    res.set('WWW-Authenticate', 'Basic realm="401"')
    res.status(401).send('Authentication required.')
  }
}

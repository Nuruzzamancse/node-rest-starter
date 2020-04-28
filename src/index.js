/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
/**
 * Wrap all console logs with consola
 */
const consola = require('consola')
const db = require('./models')
const { seedDummyData } = require('./utils/fakers')

const app = require('./config/express')
const env = require('./config/environment')

consola.wrapAll()

/**
 * Start application if not running test
 */
if (env.nodeEnv !== 'test') {
  db.sequelize.sync().then(() => {
    seedDummyData()
    app.listen(env.port, () => {
      consola.ready({
        message: `${env.appName} Server`,
        badge: true
      })
      consola.log('-------------------------------------------------')
      consola.info(`Environment: ${env.nodeEnv}`)
      consola.info(`Port: ${env.port}`)
      consola.info(`Base uri: http://localhost:${env.port}/api`)
    })
  })
}

module.exports = app

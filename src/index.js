/* eslint-disable node/no-unsupported-features/es-syntax */
/* eslint-disable promise/always-return */
/* eslint-disable promise/catch-or-return */
/**
 * Wrap all console logs with consola
 */
import consola from 'consola'
import db from './models'
import { seedDummyData } from './utils/fakers'

import app from './config/express'
import env from './config/environment'

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

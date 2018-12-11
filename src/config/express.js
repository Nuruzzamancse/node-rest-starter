const bodyParser = require('body-parser')
const compression = require('compression')
const cors = require('cors')
const express = require('express')
const helmet = require('helmet')
const crossdomain = require('helmet-crossdomain')
const morgan = require('morgan')
const methodOverride = require('method-override')
const validation = require('express-validation')
const expressWinston = require('express-winston')
const httpStatus = require('http-status')
const chokidar = require('chokidar')

const env = require('./environment')
const logger = require('./winston')
const routes = require('../index.route')
const APIError = require('../libs/APIError')

const app = express()

/**
 * Set application port to listen to
 */
app.set('port', env.PORT)

/**
 * Middleware to compress respose bodies
 */
app.use(compression())

/**
 * Middleware to parese req.body data
 */
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

/**
 * Enables HTTP verbs such as PUT or DELETE in places
 * where the client doesn't support it
 */
app.use(methodOverride())

/**
 * Set morgan environment for logging
 */
if (env.NODE_ENV === 'prod') {
  app.use(morgan('dev', { stream: logger.stream }))
} else if (env.NODE_ENV !== 'test') {
  app.use(morgan('dev'))
}

/**
 * Enables cross-origin resource sharing
 */
app.use(cors())

/**
 * Use helmet to secure Express headers
 */
app.use(crossdomain())
app.use(helmet.xssFilter())
app.use(helmet.noSniff())
app.use(helmet.frameguard())
app.use(helmet.ieNoOpen())
app.use(helmet.hidePoweredBy())

/**
 * Enable detailed API logging in all env except test
 */
if (env.NODE_ENV !== 'test') {
  expressWinston.requestWhitelist.push('body')
  expressWinston.responseWhitelist.push('body')
  app.use(expressWinston.logger({
    winstonInstance: logger,
    meta: true, // optional: log meta data about request (defaults to true)
    msg: 'HTTP {{req.method}} {{req.url}} {{res.statusCode}} {{res.responseTime}}ms',
    colorStatus: true, // Color the status code (default green, 3XX cyan, 4XX yellow, 5XX red).
    colorize: true
  }))
}

/**
 * Mounts api routes at /api
 */
app.use('/api', routes)

// Do "hot-reloading" of express stuff on the server
// Throw away cached modules and re-require next time
// Ensure there's no important state in there!
const watcher = chokidar.watch('../src')

watcher.on('ready', () => {
  watcher.on('all', () => {
    console.log('Clearing /src/ module cache from server')
    Object.keys(require.cache).forEach((id) => {
      if (/[\/\\]server[\/\\]/.test(id)) { // eslint-disable-line no-useless-escape
        delete require.cache[id]
      }
    })
  })
})

/**
 * Catch 404 and forward to error handler
 */
app.use((req, res, next) => {
  const err = new APIError('API not found!', httpStatus.NOT_FOUND)
  return next(err)
})

/**
 * If error is not an instanceOf APIError, convert it.
 */
app.use((err, req, res, next) => {
  if (err instanceof validation.ValidationError) {
    // validation error contains errors which is an array of error each containing message[]
    const unifiedErrorMessage = err.errors.map(error => error.messages.join('. ')).join(' and ')
    const error = new APIError(unifiedErrorMessage, err.status, true)
    return next(error)
  } else if (!(err instanceof APIError)) {
    const apiError = new APIError(err.message, err.status, err.isPublic)
    return next(apiError)
  }
  return next(err)
})

module.exports = app

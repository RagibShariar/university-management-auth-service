import { Server } from 'http'
import mongoose from 'mongoose'
import app from './app'
import config from './config'
import { errorlogger, logger } from './shared/logger'

// Uncaught exceptions handle
process.on('uncaughtException', error => {
  errorlogger.error(error)
  process.exit(1)
})

let server: Server
async function bootstrap() {
  try {
    await mongoose.connect(config.database_url as string)
    logger.info(`💻 Database connection successfully`)

    server = app.listen(config.port, () => {
      logger.info(`App is listening on port ${config.port}`)
    })
  } catch (err) {
    errorlogger.error(`Failed to connect`, err)
  }

  // Unhandled Rejection handle
  process.on('unhandledRejection', error => {
    console.log('Unhandled Rejection is detected, We are closing the server...')
    if (server) {
      server.close(() => {
        errorlogger.error(error)
        process.exit(1)
      })
    } else {
      process.exit(1)
    }
  })
}

bootstrap()

// SIGTERM handle
process.on('SIGTERM', () => {
  logger.info('SIGTERM is received')
  if (server) {
    server.close()
  }
})

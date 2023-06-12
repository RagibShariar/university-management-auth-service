import path from 'path'
import { createLogger, format, transports } from 'winston'
const { combine, timestamp, printf } = format

// custom log formatting
const myFormat = printf(({ level, message, timestamp }) => {
  // EXTRACT DATE
  const date = new Date(timestamp)
  const hours = date.getHours()
  const minutes = date.getMinutes()
  const seconds = date.getSeconds()

  return `${date.toDateString()} ${hours}:${minutes}:${seconds}  ${level}: ${message}`
})

const logger = createLogger({
  level: 'info',
  format: combine(timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'success.log'),
      level: 'info',
    }),
  ],
})

const errorlogger = createLogger({
  level: 'error',
  format: combine(timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new transports.File({
      filename: path.join(process.cwd(), 'logs', 'winston', 'error.log'),
      level: 'error',
    }),
  ],
})

export { errorlogger, logger }

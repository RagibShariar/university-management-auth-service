import path from 'path'
import { createLogger, format, transports } from 'winston'
import DailyRotateFile from 'winston-daily-rotate-file'
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
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'success',
        '%DATE%-success.log'
      ),
      datePattern: 'DD-MM-YYYY-HH-mm-ss',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

const errorlogger = createLogger({
  level: 'error',
  format: combine(timestamp(), myFormat),
  transports: [
    new transports.Console(),
    new DailyRotateFile({
      filename: path.join(
        process.cwd(),
        'logs',
        'winston',
        'errors',
        '%DATE%-error.log'
      ),
      datePattern: 'DD-MM-YYYY-HH-mm-ss',
      zippedArchive: true,
      maxSize: '20m',
      maxFiles: '14d',
    }),
  ],
})

export { errorlogger, logger }

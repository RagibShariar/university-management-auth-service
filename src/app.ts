import cors from 'cors'
import express, { Application } from 'express'
import globalErrorHandler from './app/middlewares/globalErrorHandler'
import usersRouter from './app/modules/users/users.route'

const app: Application = express()
// const port = 5000

// cors middleware
app.use(cors())

// parser middleware
app.use(express.json())
app.use(express.urlencoded({ extended: true }))

// Application Routes
app.use('/api/v1/users/', usersRouter)

// testing server
// app.get('/', (req: Request, res: Response, next: NextFunction) => {
//   // res.send('Hello World! Working successfully')
//   // throw new ApiError(400, 'Ore baba Error')
//   next('Ore baba Error through next function') // error
// })

// Global Error Handler
app.use(globalErrorHandler)

export default app

import cors from 'cors'
import express, { Application, Request, Response } from 'express'
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
app.get('/', async (req: Request, res: Response) => {
  res.send('Hello World! Working successfully')
})

export default app

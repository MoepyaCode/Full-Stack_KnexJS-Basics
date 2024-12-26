import express from 'express'
import morgan from 'morgan'
import { ErrorHandler } from './error'
import cors from 'cors'
import { TodoRouter } from './routers'

const app = express()

/**
 * Middleware
 */
app.use(morgan('tiny'))
app.use(cors())
app.use(express.json())

/**
 * Routers
 */
app.use('/todos', TodoRouter)

/**
 * Error Handling
 */
app.use(ErrorHandler)

export default app
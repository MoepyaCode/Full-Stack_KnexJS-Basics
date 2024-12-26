import { Router } from 'express'
import TodoController from '../controllers'

const router = Router()

/* POST: new todo */
router.post('/', TodoController.createTodo)

/* GET: all todos */
router.get('/', TodoController.getTodos)

/* GET: single todo by id */
router.get('/:id', TodoController.getTodoById)

export { router as TodoRouter }
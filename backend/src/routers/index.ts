import { NextFunction, Request, Response, Router } from 'express'
import TodoController from '../controllers'

const router = Router()

/* POST: new todo */
router.post('/', TodoController.createTodo)

/* GET: all todos */
router.get('/', TodoController.getTodos)

/* GET: single todo by id */
router.get('/id/:id', TodoController.getTodoById)

/* GET: active todos */
router.get('/active', TodoController.getActiveTodos)

/* GET: complete todos */
router.get('/complete', TodoController.getCompletedTodos)

/* PATCH: update todo */
router.patch('/id/:id', TodoController.updateTodoById)

/* DELETE: clear all todos */
router.delete('/', TodoController.clearTodos)

/* DELETE: delete todo by id */
router.delete('/id/:id', TodoController.clearTodoById)

export { router as TodoRouter }
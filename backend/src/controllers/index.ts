import { Request, Response, NextFunction } from "express";
import { TodoControllerI } from "../models";
import TodoService from '../services'

class TodoController implements TodoControllerI {

    /* POST: new todo */
    createTodo = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            const { body } = request
            const todo = await TodoService.createTodo(body)

            response.json(todo)
        } catch (error) {
            next(error)
        }
    }

    /* GET: all todos */
    getTodos = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            const todos = await TodoService.getTodos()

            response.json(todos)
        } catch (error) {
            next(error)
        }
    }

    /* GET: single todo by id */
    getTodoById = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            const { params } = request
            const todo = await TodoService.getTodoById(params)

            response.json(todo)
        } catch (error) {
            next(error)
        }
    }

    /* GET: active todos */
    getActiveTodos = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            const todos = 'hello world'

            response.json(todos)
        } catch (error) {
            next(error)
        }
    }

}

export default new TodoController()
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
            const todos = await TodoService.getActiveTodos()

            response.json(todos)
        } catch (error) {
            next(error)
        }
    }

    /* GET: complete todos */
    getCompletedTodos = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            const todos = await TodoService.getCompletedTodos()

            response.json(todos)
        } catch (error) {
            next(error)
        }
    }

    /* PATCH: update todo */
    updateTodoById = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            const { params } = request
            const todo = await TodoService.updateTodoById(params)

            response.json(todo)
        } catch (error) {
            next(error)
        }
    };

    /* DELETE: clear all todos */
    clearTodos = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            const removedRowsNo = await TodoService.clearTodos()

            response.json(removedRowsNo)
        } catch (error) {
            next(error)
        }
    }

    /* DELETE: delete todos */
    clearTodoById = async (request: Request, response: Response, next: NextFunction): Promise<void> => {
        try {
            const { params } = request
            const removedRowsNo = await TodoService.clearTodoById(params)

            response.json(removedRowsNo)
        } catch (error) {
            next(error)
        }
    }

}

export default new TodoController()
import { NextFunction, Request, Response } from "express"

declare interface TodoI {
    id: number
    text: string
    complete: boolean
    created_at: string
    updated_at: string
}

declare interface TodoDaoI {
    createTodo: (text: string) => Promise<TodoI | undefined>
    getTodos: () => Promise<TodoI[]>
    getTodoById: (id: number) => Promise<TodoI | undefined>
    // getActiveTodos: () => Promise<TodoI[]>
    // getCompletedTodos: () => Promise<TodoI[]>
    // clearTodos: () => Promise<number>
    // clearTodoById: (number) => Promise<number>
}

declare interface TodoServiceI {
    createTodo: (dto: any) => Promise<TodoI | undefined>
    getTodos: () => Promise<TodoI[]>
    getTodoById: (dto: any) => Promise<TodoI | undefined>
    // getActiveTodos: () => Promise<TodoI[]>
    // getCompletedTodos: () => Promise<TodoI[]>
    // clearTodos: () => Promise<number>
    // clearTodoById: (dto: any) => Promise<number>
}

declare interface TodoControllerI {
    createTodo: (request: Request, response: Response, next: NextFunction) => Promise<void>
    getTodos: (request: Request, response: Response, next: NextFunction) => Promise<void>
    getTodoById: (request: Request, response: Response, next: NextFunction) => Promise<void>
    getActiveTodos: (request: Request, response: Response, next: NextFunction) => Promise<void>
    // getCompletedTodos: (request: Request, response: Response, next: NextFunction) => Promise<void>
    // clearTodos: (request: Request, response: Response, next: NextFunction) => Promise<void>
    // clearTodoById: (request: Request, response: Response, next: NextFunction) => Promise<void>
}

export {
    TodoI,
    TodoDaoI,
    TodoServiceI,
    TodoControllerI
}
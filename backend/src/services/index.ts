import { isEmpty, isInteger, isNumber, isUndefined } from "lodash";
import { TodoI, TodoServiceI } from "../models";
import TodoDao from '../dao'

class TodoService implements TodoServiceI {

    createTodo = async (dto: any): Promise<TodoI | undefined> => {
        const { text } = dto

        if (isUndefined(text) || isEmpty(text)) throw new Error(`Can't submit empty text!`)

        return TodoDao.createTodo(text)
    }

    getTodos = async (): Promise<TodoI[]> => {
        return TodoDao.getTodos()
    }

    getTodoById = async (dto: any): Promise<TodoI | undefined> => {
        let { id } = dto

        id = this.checkIdIsValid(id)

        const todo = await this.checkTodoExists(id)

        return todo
    }

    getActiveTodos = async (): Promise<TodoI[]> => {
        return TodoDao.getActiveTodos()
    }

    getCompletedTodos = async (): Promise<TodoI[]> => {
        return TodoDao.getCompletedTodos()
    }

    updateTodoById = async (dto: any): Promise<TodoI | undefined> => {
        let { id } = dto

        id = this.checkIdIsValid(id)

        const todo = await this.checkTodoExists(id)
        const response = await TodoDao.updateTodoById(id, !todo.complete)

        if(!response) throw new Error('Todo failed to update!')

        return TodoDao.getTodoById(id)
    }


    clearTodos = async (): Promise<number> => {
        return TodoDao.clearTodos()
    }

    clearTodoById = async (dto: any): Promise<number> => {
        let { id } = dto

        id = this.checkIdIsValid(id)
        await this.checkTodoExists(id)

        return TodoDao.clearTodoById(id)
    }

    /**
     * Checks if todo exists
     * @param id 
     * @returns { TodoI } 
     */
    private checkTodoExists = async (id: number): Promise<TodoI> => {
        const todo = await TodoDao.getTodoById(id)

        if (isUndefined(todo)) throw new Error('Todo does not exist!')

        return todo
    }

    /**
     * Checks if ID is a valid number
     * @param id 
     * @returns { number }
     */
    private checkIdIsValid = (id: string): number => {
        try {
            const value = parseFloat(id)

            if (!isInteger(value)) throw new Error

            return value
        } catch (error) {
            throw new Error('ID type is invalid!')
        }
    }

}

export default new TodoService()
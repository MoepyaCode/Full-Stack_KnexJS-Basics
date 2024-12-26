import { isUndefined } from "lodash";
import { TodoI, TodoServiceI } from "../models";
import TodoDao from '../dao'

class TodoService implements TodoServiceI {

    createTodo = async (dto: any): Promise<TodoI | undefined> => {
        const { text } = dto

        if (isUndefined(text)) throw new Error(`Can't submit empty text!`)

        return TodoDao.createTodo(text)
    }


    getTodos = async (): Promise<TodoI[]> => {
        return TodoDao.getTodos()
    }


    getTodoById = async (dto: any): Promise<TodoI | undefined> => {
        const { id } = dto
        const todo = await TodoDao.getTodoById(id)

        if (isUndefined(todo)) throw new Error('Todo does not exist!')

        return todo
    }

}

export default new TodoService()
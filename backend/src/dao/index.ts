import db from "../database";
import { TodoDaoI, TodoI } from "../models";

class TodoDao implements TodoDaoI {

    private tableName = 'todos'

    createTodo = async (text: string): Promise<TodoI | undefined> => {
        return (await db<TodoI>(this.tableName).insert({ text, complete: false }).returning('*'))[0]
    }

    getTodos = async (): Promise<TodoI[]> => {
        return db<TodoI>(this.tableName).select('*')
    }

    getTodoById = async (id: number): Promise<TodoI | undefined> => {
        return (await db<TodoI>(this.tableName).select('*').where('id', id))[0]
    }

    getActiveTodos = (): Promise<TodoI[]> => {
        return db<TodoI>(this.tableName).select('*').where('complete', false)
    }

    getCompletedTodos = (): Promise<TodoI[]> => {
        return db<TodoI>(this.tableName).select('*').where('complete', true)
    }

    updateTodoById = async (id: number, complete: boolean): Promise<number> => {
        return db<TodoI>('todos').update('complete', complete).where('id', id)
    }


    clearTodos = (): Promise<number> => {
        return db<TodoI>(this.tableName).delete()
    }

    clearTodoById = (id: number): Promise<number> => {
        return db<TodoI>(this.tableName).delete().where('id', id)
    }
}

export default new TodoDao()
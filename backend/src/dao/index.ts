import db from "../database";
import { TodoDaoI, TodoI } from "../models";

class TodoDao implements TodoDaoI {
    
    private table = db<TodoI>('todos')

    createTodo = async (text: string): Promise<TodoI | undefined> => {
        return (await this.table.insert({ text, complete: false }).returning('*'))[0]
    }

    getTodos = async (): Promise<TodoI[]> => {
        return this.table.select('*')
    }

    getTodoById = async (id: number): Promise<TodoI | undefined> => {
        return (await this.table.select('*').where('id', id)).find(todo => todo.id === id)
    }

}

export default new TodoDao()
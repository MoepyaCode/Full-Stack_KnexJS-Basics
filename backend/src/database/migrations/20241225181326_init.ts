import type { Knex } from "knex";


export async function up(knex: Knex): Promise<void> {
    return knex.schema.createTable('todos', (table) => {
        table.increments('id').primary().unique()
        table.string('text').notNullable()
        table.boolean('complete').notNullable()
        table.timestamps(true, true)
    })
}

export async function down(knex: Knex): Promise<void> {
    return knex.schema.dropTableIfExists('todos')
}


import { Knex } from "knex";

export async function seed(knex: Knex): Promise<void> {
    // Deletes ALL existing entries
    await knex.raw('TRUNCATE TABLE "todos" CASCADE');

    const complete = false

    // Inserts seed entries
    await knex("todos").insert([
        { text: "rowValue1", complete },
        { text: "rowValue2", complete },
        { text: "rowValue3", complete }
    ]);
};

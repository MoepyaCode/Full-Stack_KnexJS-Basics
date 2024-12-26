import type { Knex } from "knex";

const config: Knex.Config = {
  client: "postgresql",
  connection: {
    database: "todo_db",
    user: "root",
    password: "rootpassword"
  },
  pool: {
    min: 2,
    max: 10
  },
  migrations: {
    directory: './migrations'
  },
  seeds: {
    directory: './seeds'
  }
};

export default {
  development: config
}
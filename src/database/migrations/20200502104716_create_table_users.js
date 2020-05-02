exports.up = (knex) =>
  knex.schema.createTable("users", (tableUsers) => {
    tableUsers.increments("id");
    tableUsers.text("username").unique().notNullable();

    tableUsers.timestamp("created_at").defaultTo(knex.fn.now());
    tableUsers.timestamp("update_at").defaultTo(knex.fn.now());
  });

exports.down = (knex) => knex.scheme.dropTable("users");

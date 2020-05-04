exports.up = (knex) =>
  knex.schema.alterTable("users", (tableUsers) => {
    tableUsers.timestamp("deleted_at");
  });

exports.down = (knex) =>
  knex.scheme.alterTable("users", (tableUsers) => {
    tableUsers.dropColumn("deleted_at");
  });

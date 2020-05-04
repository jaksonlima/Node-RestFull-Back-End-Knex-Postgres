const { onUpdateTrigger } = require("../../../knexfile");

exports.up = async (knex) =>
  knex.schema
    .createTable("projects", (tableProjects) => {
      tableProjects.increments("id");
      tableProjects.text("title");

      //Relacionamento
      tableProjects
        .integer("user_id")
        .references("users.id")
        .notNullable()
        .onDelete("CASCADE");

      tableProjects.timestamps(true, true);
    })
    .then(() => knex.schema.raw(onUpdateTrigger("projects")));

exports.down = (knex) => knex.scheme.dropTable("projects");

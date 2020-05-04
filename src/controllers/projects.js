const knex = require("../database");
const { isNull } = require("../utils/utils");

module.exports = {
  async index(req, res, next) {
    try {
      const { user_id, page = 1 } = req.query;

      const limit = 5;
      const pages = (page - 1) * limit;

      const query = knex("projects").limit(limit).offset(pages);

      const countProject = knex("projects").count();

      if (user_id) {
        query
          .where({ user_id })
          .join("users", "users.id", "=", "projects.user_id")
          .select("projects.*", "users.username")
          .whereNull("users.deleted_at");

        countProject.where({ user_id });
      }

      const [count] = await countProject;

      res.header("X-Total-Count", count["count"]);

      const result = await query;

      return res.json(result);
    } catch (error) {
      next(error);
    }
  },
  async create(req, res, next) {
    try {
      const { user_id, title } = req.body;

      await knex("projects").insert({
        title,
        user_id,
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async encontraPorId(req, res, next) {
    try {
      const { id } = req.params;

      const projects = await knex("projects").where({ id });

      if (isNull(projects)) {
        const error = new Error("projects não encontrado");
        error.status = 404;
        next(error);
        return;
      }

      return res.status(200).json(projects);
    } catch (error) {
      next(error);
    }
  },
};

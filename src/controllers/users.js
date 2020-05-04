const knex = require("../database");
const { isNull } = require("../utils/utils");

module.exports = {
  async index(req, res) {
    const users = await knex("users").whereNull("deleted_at");
    return res.json(users);
  },
  async create(req, res, next) {
    try {
      let { username } = req.body;

      await knex("users").insert({
        username,
      });

      return res.status(201).send();
    } catch (error) {
      next(error);
    }
  },
  async update(req, res, next) {
    try {
      const { username } = req.bady;
      const { id } = req.params;

      await knex("users").update({ username }).where({ id });

      return res.send();
    } catch (error) {
      next(error);
    }
  },
  async delete(req, res, next) {
    try {
      const { id } = req.params;

      await knex("users").where({ id }).update("deleted_at", new Date.now());

      return res.status(200).send();
    } catch (error) {
      next(error);
    }
  },
  async encontraPorId(req, res, next) {
    try {
      const { id } = req.params;

      const user = await knex("users").where({ id });

      if (isNull(user)) {
        const error = new Error("usuario não encontrado");
        error.status = 404;
        next(error);
        return;
      }

      return res.status(200).json(user);
    } catch (error) {
      next(error);
    }
  },
};

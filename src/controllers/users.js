const knex = require("../database");

module.exports = {
  async index(req, res) {
    const users = await knex("users");
    return res.json(users);
  },
};

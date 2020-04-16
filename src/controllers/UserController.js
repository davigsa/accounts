const User = require('../models/User');

module.exports = {
  async store(req, res) {
    const { name, email, nick, password } = req.body;

    try {
      const user = await User.create({
        name,
        email,
        nick,
        password,
      });
      return res.json(user);
    } catch (e) {
      console.log(e);
    }
  },

  async index(req, res) {
    try {
      const users = await User.find();
      return res.json(users);
    } catch (e) {
      return res.status(400);
    }
  },
};

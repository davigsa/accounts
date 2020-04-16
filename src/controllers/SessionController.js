const User = require('../models/User');

module.exports = {
  async store(req, res) {
    try {
      const user = await User.findOne({ nick: req.body.nick });
      if (!user) {
        return res.status(400).json({ message: 'The username does not exist' });
      }
      user.comparePassword(req.body.password, (error, match) => {
        if (!match) {
          return response
            .status(400)
            .json({ message: 'The password is invalid' });
        }
      });
      return res.json({
        message: 'The username and password combination is correct!',
      });
    } catch (error) {
      return res.status(500).send(error);
    }
  },
};

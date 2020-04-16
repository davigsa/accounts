const Avatar = require('../models/Avatar');

module.exports = {
  async store(req, res) {
    const { originalname: name, size, filename: key } = req.file;
    const { authorization } = req.headers;

    try {
      const avatar = await Avatar.create({
        name,
        size,
        key,
        userId: authorization,
        url: '',
      });
      return res.json(avatar);
    } catch (e) {
      return res.status(400);
    }
  },
  async update(req, res) {
    const { originalname: name, size, filename: key } = req.file;
    const { authorization } = req.headers;
    const { id } = req.params;

    try {
      await Avatar.findOneAndUpdate(
        { _id: id, userId: authorization },
        {
          name,
          size,
          key
        },
      );

      return res.json({ message: 'your avatar has been changed succefully!' });
    } catch (e) {
      console.log(e);
      return res.status(400);
    }
  },
};

const mongoose = require('mongoose');

const AvatarSchema = new mongoose.Schema({
  name: String,
  size: Number,
  key: {
    type: String,
    unique: true,
  },
  userId: mongoose.Schema.Types.ObjectId,
  url: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

module.exports = mongoose.model('Avatar', AvatarSchema);

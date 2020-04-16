const mongoose = require('mongoose');
const Bcrypt = require('bcryptjs');
const { isEmail } = require('validator');

const UserSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
    unique: true,
    validate: [isEmail, 'invalid email'],
  },
  nick: {
    type: String,
    unique: true,
    required: true,
  },
  password: String,
  createdAt: {
    type: Date,
    default: Date.now(),
  },
});

UserSchema.pre('save', function (next) {
  if (!this.isModified('password')) {
    return next();
  }
  this.password = Bcrypt.hashSync(this.password, 10);
  next();
});

UserSchema.methods.comparePassword = function (plaintext, callback) {
  return callback(null, Bcrypt.compareSync(plaintext, this.password));
};

module.exports = mongoose.model('User', UserSchema);

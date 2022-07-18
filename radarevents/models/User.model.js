const { Schema, model } = require('mongoose');
const userSchema = new Schema(
  {
    username: {
      type: String,
      unique: true,
      trim: true,
    },
    passwordHash: {
      type: String,
      required: [true, 'Password is required.']
    }
  },
  {
    timestamps: true
  }
);
module.exports = model('User', userSchema);

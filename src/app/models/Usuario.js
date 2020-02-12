const mongoose = require('mongoose')

const UserSchema = new mongoose.Schema(
  {
    email: {
      type: String,
      required: true
    },
    password: {
      type: String,
      required: true
    },
    googleAccount: { 
      type: Boolean, 
      default: false
    },
    name: {
      type: String,
      required: true
    },
    income: {
      type: Number,
      required: true
    },
    lastAccess: { 
      type: Date, 
      default: Date.now
    },
    activeAccount: {
      type: Boolean,
      required: true
    },
    tokenVerification: {
      type: String,
      required: true
    },
  }
);

module.exports = mongoose.model('User', UserSchema);


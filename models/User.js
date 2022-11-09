const mongoose = require("mongoose");
const validator = require("validator");
const passwordValidator = require("password-validator");
const validationResult = require('express-validator');


const User = mongoose.model("User", {
  email: {
    unique: true,
    required: true,
    type: String,
    validate: {
      validator: validator.isEmail,
      message: "Please provide a valid email",
    },
  },
  account: {
    username: {
      required: true,
      type: String,
      minlength: 3,
      maxlength: 20,
      unique: true,
      trim: true,
    },
    first_name: {
      required: true,
      type: String,
      trim: true,
      maxlength: 20,
      default: "firstName",
    },
    last_name: {
      required: true,
      type: String,
      trim: true,
      maxlength: 20,
      default: "lastName",
    },
    avatar: Object,
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  token: String,
  apiKey: String,
  hash: String,
  salt: String,
});

module.exports = User;

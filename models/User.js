// const mongoose = require("mongoose");
// const validator = require("validator");

// const User = mongoose.model("User", {
//   email: {
//     unique: true,
//     required: true,
//     type: String,
//     validate: {
//         validator: validator.isEmail,
//         message: 'Please provide a valid email',
//       },
//   },
//   account: {
//     first_name: {
//       required: true,
//       type: String,
//       trim: true,
//       maxlength: 20,
//       default: 'firstName',
//     },
//     last_name: {
//       required: true,
//       type: String,
//       trim: true,
//       maxlength: 20,
//       default: 'lastName',
//     },
//     username: {
//       unique: true,
//       required: true,
//       type: String,
//       minlength:3,
//       maxlength:20,
//       trim: true,
//     },
//     password: {
//       type: String,
//       required: true,
//       minlength:6,
//       select: false,
//     },
//     bYear: {
//       type: Number,
//       required: true,
//     },
//     bMonth: {
//       type: Number,
//       required: true,
//     },
//     bDay: {
//       type: Number,
//       required: true,
//     },
//     verified: {
//       type: Boolean,
//       default: false,
//     },
//     avatar: Object,
//   },

// module.exports = User;
const mongoose = require("mongoose");
const validator = require("validator");

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
  },
  role: {
    type: String,
    enum: ["admin", "user"],
    default: "user",
  },
  token: String,
  hash: String,
  salt: String,
});

module.exports = User;

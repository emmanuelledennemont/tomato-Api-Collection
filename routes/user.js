const express = require("express");

const router = express.Router();
const isAuthenticated = require("../middleware/isAuthenticated");

// Import du modèle User
const User = require("../models/User");

const SHA256 = require("crypto-js/sha256");
const encBase64 = require("crypto-js/enc-base64");
const uid2 = require("uid2");

router.post("/user/register", async (req, res) => {
  try {
    const { first_name, last_name, username, email, password } = req.fields;

    const userSameMail = await User.findOne({ email: email });
    const userSameUsername = await User.findOne({
      account: { username: username },
    });
    if (username && password && email) {
      if (!userSameMail) {
        if (!userSameUsername) {
          const salt = uid2(16);

          const hash = SHA256(salt + password).toString(encBase64);
          const token = uid2(64);

          const newUser = await new User({
            email: email,
            account: {
              username: username,
              firstname: first_name,
              lastname: last_name,
            },
            token: token,
            hash: hash,
            salt: salt,
          });

          await newUser.save();
          res.status(200).json({
            _id: newUser._id,
            token: token,
            account: {
              username: username,
              firstname: first_name,
              lastname: last_name,
            },
          });
        } else {
          res.status(409).json({
            message: "Username already taken",
          });
        }
      } else {
        res.status(409).json({
          message: "Email already taken",
        });
      }
    } else {
      res.status(400).json({
        message: "Missing data",
      });
    }
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/user/login", async (req, res) => {
  try {
    const { email, password } = req.fields;
    const userToFind = await User.findOne({ email: email });

    if (userToFind) {
        const newHash = SHA256(userToFind.salt + password).toString(encBase64);

        const hash = userToFind.hash;
 
        if (hash === newHash) {
          res.status(200).json({
            _id: userToFind._id,
            token: userToFind.token,
            account: {
              username: userToFind.account.username,
            },
          });
        } else {
          res.status(401).json({
            message: "Identifiants incorrects",
          });
        }
      } else {
        res.status(401).json({
          message: "Identifiants incorrects",
        });
      }        
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

module.exports = router;

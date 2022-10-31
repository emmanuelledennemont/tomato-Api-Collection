const User = require("../models/User");

const isAuthenticated = async (req, res, next) => {

  try {
    if (req.headers.authorization) {

      const token = req.headers.authorization.replace("Bearer ", "");

      const user = await User.findOne({ token });

      if (user) {
        req.user = user;
        next();
      } else {
        res.status(401).json({ message: "Unauthorized : user not found" });
      }
    } else {
      res.status(401).json({ message: "Unauthorized : no token" });
    }
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

module.exports = isAuthenticated;
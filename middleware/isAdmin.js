const User = require("../models/User");

const isAdmin = async (req, res, next) => {
  const {user}= req;
  if(user.role === 'admin') {
    next()
  }else {
    res.status(401).json({ message: "Unauthorized Access" });
  } 
  
  }
 

  module.exports = isAdmin;
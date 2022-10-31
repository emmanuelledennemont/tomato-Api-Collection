const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose")

require("dotenv").config();

const cors = require("cors");

// Import de cloudinary
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(cors());
app.use(formidable());

//mongoose.connect(process.env.MONGODB_URI);

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});


app.all("*", (req, res) => {
res.status(404).json({ message: "Route introuvable" });
});

app.listen(process.env.PORT, () => {
  console.log("Served started");
});

const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose");
const { check, validationResult } = require("express-validator");

require("dotenv").config();

const cors = require("cors");

// Import de cloudinary
const cloudinary = require("cloudinary").v2;

const app = express();
app.use(cors());
app.use(formidable());

mongoose.connect("mongodb://localhost:27017/apitomate");

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

app.get("/", (req, res) => {
  res.status(200).json({ message: "Tomato collection Api" });
});

const userRoutes = require("./routes/user");
app.use(userRoutes);

app.all("*", (req, res) => {
  res.status(404).json({ message: "Route introuvable" });
});

app.listen(process.env.PORT, () => {
  console.log("Served started");
});

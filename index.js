const express = require("express");
const formidable = require("express-formidable");
const mongoose = require("mongoose")

require("dotenv").config();

const cors = require("cors");

const app = express();
app.use(cors());
app.use(formidable());

//mongoose.connect(process.env.MONGODB_URI);



app.all("*", (req, res) => {
res.status(404).json({ message: "Route introuvable" });
});

app.listen(process.env.PORT, () => {
  console.log("Served started");
});

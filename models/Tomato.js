const mongoose = require("mongoose");

const Tomato = mongoose.model("Tomato", {
  name: {
    type: String,
    trim: true,
    required: [true, "Please provide product name"],
    maxlength: [100, "Name can not be more than 100 characters"],
  },
  price: {
    type: Number,
    required: [true, "Please provide product price"],
    default: 0,
  },
  description: {
    type: String,
    required: [true, "Please provide product description"],
    maxlength: [1000, "Description can not be more than 1000 characters"],
  },
  image: {
    type: String,
    default: "/uploads/example.jpeg",
  },
  category: {
    type: String,
    required: [true, "Please provide product category"],
    enum: ["légumes", "fruits", "fleurs", "autre"],
  },
  colors: {
    type: [String],
    default: ["Rouge"],
    required: true,
    enum: [
      "Acajou",
      "Bicolore Jaune-Rouge",
      "Bigarrée",
      "Blanche",
      "Bleue",
      "Orange",
      "Jaune",
      "Noire",
      "Noire à Pourpre",
      "Pourpre violacé",
      "Rose",
      "Rouge",
      "Verte",
      "Zébrée",
    ],
    required: true,
  },
  calibre: {
    type: [String],
    default: ["Petit"],
    enum: [
      "Petit",
      "Moyen",
      "Gros",
      "autre",
      "Cerise",
      "Cocktail",
      "Gros",
      "Gros à très gros",
      "Groseille",
      "Moyen",
      "Moyen à Gros",
      "Moyen à très Gros",
      "Petit",
      "Petit à Moyen",
    ],
    required: true,
  },
  forme: {
    type: [String],
    default: ["ovale"],
    enum: [
      "Beefsteak",
      "Ronde",
      "Gros",
      "Côtelée",
      "Aplatie",
      "Renflée",
      "Ovale-Prune-Allongée",
      "Cordiforme",
      "Piriforme",
      "Variable",
      "Téton",
      "Poivron-Piment",
    ],
  },
  précocité: {
    type: String,
    enum: ["Hâtive", "Mi-Précoce", "Mi-Saison", "Précoce", "Tardive"],
  },
  climat: {
    type: String,
    enum: ["Chaud et Sec", "Frais", "Serre", "Tous"],
  },
  feuillage: {
    type: String,
    enum: [
      "Angora",
      "Carotte",
      "Panache",
      "Pomme de terre",
      "Pomme de terre - Rugosa",
      "Pompom",
      "Régulier",
      "Régulier - Rugosa",
      "Précoce",
      "Tardive",
    ],
  },
  croissance: {
    type: String,
    enum: [
      "Déterminée",
      "Dwarf Déterminée",
      "Dwarf Indéterminée",
      "Indéterminée",
      "Semi-déterminée",
    ],
  },
  hauteur: {
    type: String,
  },
  origine: {
    type: String,
  },
  freeShipping: {
    type: Boolean,
    default: false,
  },
  inventory: {
    type: Number,
    required: true,
    default: 15,
  },
  averageRating: {
    type: Number,
    default: 0,
  },
  numOfReviews: {
    type: Number,
    default: 0,
  },
  numOfSeeds: {
    type: Number,
    default: 0,
  },
  newTomato:{
    type: String,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  user: {
    type: mongoose.Types.ObjectId,
    ref: "User",
    required: true,
  },
});

module.exports = Tomato;

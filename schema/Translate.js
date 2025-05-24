const mongoose = require("mongoose");

const translateSchema = new mongoose.Schema({
  ru: { type: String, required: true },
  uzb: { type: String, required: true },
});

const Translate = mongoose.model("Translate", translateSchema);

module.exports = Translate;

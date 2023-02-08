const mongoose = require("mongoose");

const StoreSchema = new mongoose.Schema({
  name: {
    type: String,
    max: 255,
    required: true,
  },
});

module.exports = mongoose.model("Store", StoreSchema, "Stores");

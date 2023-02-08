const mongoose = require("mongoose");

const AffiliateSchema = new mongoose.Schema({
  name: {
    type: String,
    max: 255,
    required: true,
  },
  store: {
    type: String,
    max: 255,
    required: true,
  },
});

module.exports = mongoose.model("Affiliate", AffiliateSchema, "Affiliates");

const mongoose = require("mongoose");

const bannerSchema = new mongoose.Schema({
  image: {
    type: String,
    max: 255,
    required: true,
  },
  url: {
    type: String,
    max: 955,
    required: true,
  },
});

module.exports = mongoose.model("banner", bannerSchema, "banners");

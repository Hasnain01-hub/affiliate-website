const mongoose = require("mongoose");

const productCategorySchema = new mongoose.Schema({
  name: {
    type: String,
    max: 255,
    required: true,
  },
  image: {
    type: String,
    required: true,
  },
});

module.exports = mongoose.model(
  "productCategory",
  productCategorySchema,
  "productCategorys"
);

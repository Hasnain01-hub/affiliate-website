const mongoose = require("mongoose");

const productSchema = new mongoose.Schema(
  {
    images: {
      type: Array,
      required: true,
    },
    p_name: {
      type: String,
      required: true,
    },
    p_link: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
    description: {
      type: String,
    },
    how_avail: {
      type: String,
    },
  },
  { timestamps: true } // createdAt, updatedAt timestamps will be taken care of by this automatically
);

module.exports = mongoose.model("products", productSchema, "products");

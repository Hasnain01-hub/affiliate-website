const mongoose = require("mongoose");

const ItemSchema = new mongoose.Schema(
  {
    image: {
      type: String,
      required: true,
    },
    end_date: {
      type: String,
    },
    deal_category: {
      type: String,
    },
    description: {
      type: String,
    },
    how_avail: {
      type: String,
    },
    name: {
      type: String,
      required: true,
    },
    link: {
      type: String,
      required: true,
    },
    from: {
      type: String,
      required: true,
    },
    price: {
      type: Number,
      required: true,
    },
    discount: {
      type: Number,
      required: true,
    },
    category: {
      type: String,
      required: true,
    },
  },
  { timestamps: true } // createdAt, updatedAt timestamps will be taken care of by this automatically
);

module.exports = mongoose.model("Items", ItemSchema, "Items");

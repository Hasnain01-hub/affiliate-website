const Product = require("../model/product.model");
exports.addproduct = (req, res) => {
  const product = new Product(req.body.deals);
  product
    .save()
    .then((doc) => {
      if (doc) {
        return res.status(200).json({ message: "Success" });
      }
    })
    .catch((err) => {
      return res.status(404).json({ message: "error" });
    });
};

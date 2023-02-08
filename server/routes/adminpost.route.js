const express = require("express");
const {
  addAdmin,
  viewAdmin,
  viewDeals,
  deletedeals,
} = require("../controller/admin.controller");
const { addproduct } = require("../controller/product.controller");
const router = express.Router();

router.post("/add-admin", addAdmin);
router.get("/view-admins", viewAdmin);
router.get("/view-deals", viewDeals);
router.post("/add-product", addproduct);
router.post("/removedeals", deletedeals);

module.exports = router;

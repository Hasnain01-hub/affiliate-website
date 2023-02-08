const express = require("express");
const {
  addAdmin,
  viewAdmin,
  viewDeals,
} = require("../controller/admin.controller");
const { addproduct } = require("../controller/product.controller");
const router = express.Router();

router.post("/add-admin", addAdmin);
router.get("/view-admins", viewAdmin);
router.get("/view-deals", viewDeals);
router.post("/add-product", addproduct);

module.exports = router;

const express = require("express");
const {
  addAdmin,
  viewAdmin,
  viewDeals,
  deletedeals,
  AddStore,
  viewStore,
} = require("../controller/admin.controller");
const { addproduct } = require("../controller/product.controller");
const router = express.Router();

router.post("/add-admin", addAdmin);
router.get("/view-admins", viewAdmin);
router.get("/view-deals", viewDeals);
router.post("/add-product", addproduct);
router.post("/removedeals", deletedeals);
router.post("/store/add", AddStore);
router.get("/store/get", viewStore);

module.exports = router;

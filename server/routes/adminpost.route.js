const express = require("express");
const {
  addAdmin,
  viewAdmin,
  viewDeals,
  deletedeals,
  AddStore,
  viewStore,
  getAffiliateIDS,
  addAFfiliateID,
  addProducts,
  viewProducts,
  viewProductCategory,
  addProductCategory,
  viewAllDeals,
  removeProduct,
  removeStore,
  deleteAffiliateID,
  getCategoryProducts,
} = require("../controller/admin.controller");
const { addproduct } = require("../controller/product.controller");
const router = express.Router();

//Get Routes
router.get("/product/get", viewProducts);
router.get("/category/get", viewProductCategory);
router.get("/view-admins", viewAdmin);
router.get("/view-deals", viewDeals);
router.get("/view-all-deals", viewAllDeals);
router.get("/store/get", viewStore);
router.get("/affiliate/get", getAffiliateIDS);
router.get("/affiliate/delete/:id", deleteAffiliateID);
router.get("/affiliate/get", getAffiliateIDS);
router.get("/category/:cat", getCategoryProducts);
router.get("/removeproduct/:id", removeProduct);
router.get("/removestore/:id", removeStore);

//Post Routes
router.post("/add-admin", addAdmin);
router.post("/add-product", addproduct);
router.post("/removedeals", deletedeals);
router.post("/store/add", AddStore);
router.post("/affiliate/add", addAFfiliateID);
router.post("/product/add", addProducts);
router.post("/category/add", addProductCategory);

module.exports = router;

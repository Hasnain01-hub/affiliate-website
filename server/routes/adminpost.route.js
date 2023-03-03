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
  getUsers,
  attachAffiliate,
  viewUsers,
  getSingleUser,
  updateUser,
  addBanner,
  getBanners,
  deleteBanner,
  getDashboard,
  getSingleDeal,
  getSingleProductDeal,
  getCategoryDeals,
  sendMail,
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
router.get("/category/:cat", getCategoryProducts);
router.get("/category_deal/:cat", getCategoryDeals);
router.get("/removeproduct/:id", removeProduct);
router.get("/removestore/:id", removeStore);
router.get("/get_users", getUsers);
router.get("/get_all_users", viewUsers);
router.get("/single_user/:id", getSingleUser);
router.get("/banners/get", getBanners);
router.get("/banner/delete/:id", deleteBanner);
router.get("/home", getDashboard);
router.get("/single_deal/:id", getSingleDeal);
router.get("/single_product/:id", getSingleProductDeal);

//Post Routes

router.post("/add-admin", addAdmin);
router.post("/add-product", addproduct);
router.post("/removedeals", deletedeals);
router.post("/store/add", AddStore);
router.post("/affiliate/add", addAFfiliateID);
router.post("/product/add", addProducts);
router.post("/category/add", addProductCategory);
router.post("/affiliate/attach", attachAffiliate);
router.post("/user/edit", updateUser);
router.post("/banner/add", addBanner);

module.exports = router;

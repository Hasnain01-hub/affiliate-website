const express = require("express");
const router = express.Router();

const { verifyuser } = require("../middleware/auth.middleware");
const {
  fetchUserData,
  registerController,
  loginController,
  adminLogin,
} = require("../controller/auth.controller");
// require("../config/passport");

router.get("/current_user", verifyuser, fetchUserData);
router.post("/register", registerController);
router.post("/login", loginController);
router.post("/admin/login", adminLogin);

module.exports = router;

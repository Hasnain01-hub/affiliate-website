const express = require("express");
const { addAdmin, viewAdmin } = require("../controller/admin.controller");
const router = express.Router();

router.post("/add-admin", addAdmin);
router.get("/view-admins", viewAdmin);

module.exports = router;

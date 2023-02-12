const express = require("express");
const { generateLink } = require("../controller/generate.link");
const router = express.Router();

const { verifyuser } = require("../middleware/auth.middleware");
router.post("/generate-link", verifyuser, generateLink);
module.exports = router;

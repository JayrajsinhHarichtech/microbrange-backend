const express = require("express");
const router = express.Router();
const contactcontroller = require("../controllers/contactcontroller");

router.post("/contact", contactcontroller.submitApplication);

module.exports = router;

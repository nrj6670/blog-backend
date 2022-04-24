const express = require("express");
const categoryController = require("../controller/Category");
const router = express.Router();

router.get("/:category",categoryController.getCategoryData)

module.exports = router
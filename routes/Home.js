const express = require("express");
const homeController = require("../controller/Home");
const router = express.Router();

router.get("/",homeController.getHomeData)

module.exports = router
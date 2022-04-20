const express = require("express");
const homeController = require("../controller/Home");
const homeRouter = express.Router();

homeRouter.route("/").get(homeController.gethomeDetails)

module.exports = homeRouter
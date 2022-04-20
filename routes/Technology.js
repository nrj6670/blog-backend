const express = require("express");
const technologyController = require("../controller/Technology");
const technologyRouter = express.Router();

technologyRouter.route("/").get(technologyController.gettechnologyDetails)

module.exports = technologyRouter
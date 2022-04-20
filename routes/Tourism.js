const express = require("express");
const tourismController = require("../controller/Tourism");
const tourismRouter = express.Router();

tourismRouter.route("/").get(tourismController.gettourismDetails)

module.exports = tourismRouter
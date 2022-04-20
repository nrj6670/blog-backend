const express = require("express");
const foodController = require("../controller/Food");
const foodRouter = express.Router();

foodRouter.route("/").get(foodController.getfoodDetails)

module.exports = foodRouter
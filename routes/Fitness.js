const express = require("express");
const fitnessController = require("../controller/Fitness");
const fitnessRouter = express.Router();

fitnessRouter.route("/").get(fitnessController.getfitnessDetails)

module.exports = fitnessRouter
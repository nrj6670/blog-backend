const express = require("express");
const server = express();

const cors = require("cors");

server.use(cors())

const homeRoutes = require("./routes/Home");
const foodRoutes = require("./routes/Food")
const fitnessRoutes = require("./routes/Fitness")
const technologyRoutes = require("./routes/Technology")
const tourismRoutes = require("./routes/Tourism");
const categoryRoutes = require("./routes/Category")
const { response } = require("express");

server.use("/api/v1", homeRoutes);
// server.use("/api/v1", foodRoutes);
// server.use("/api/v1", fitnessRoutes);
// server.use("/api/v1", technologyRoutes);
// server.use("/api/v1", tourismRoutes);
server.use("/api/v1", categoryRoutes);


//this will handler all the requests made to this server other than the defined paths
server.get("/*", (request, response) => {
    response.status(404).send({
        error: "Requested resource not found"
    })
})

server.listen(process.env.PORT || 6000,()=>{
    console.log("Server has started")
})
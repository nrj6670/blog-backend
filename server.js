const express = require("express");
const server = express();

const cors = require("cors");
const mainrouter = require("./routes");

server.use("/api/v1", mainrouter);

server.listen(process.env.PORT || 6000,()=>{
    console.log("Server has started")
})
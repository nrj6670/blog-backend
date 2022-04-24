const DataFile = require("../Data")

exports.getHomeData = (request, response) => {
    response.status(200).send(DataFile.Data);
}

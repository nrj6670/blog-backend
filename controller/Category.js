const DataFile = require("../Data")

exports.getCategoryData = (request, response) => {
    const pathParam = request.params['category']
    const filteredData = DataFile.Data.filter((item) => {
        return item.category.toLowerCase() === pathParam.toLowerCase();
    })
  
    response.status(200).send(filteredData);
}
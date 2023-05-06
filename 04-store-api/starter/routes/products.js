const express = require("express")
//routers
const routers = express.Router()


//import the controller
const {getAllProducts,getAllProductsStatic} = require("../controllers/products")
//setup the routers
routers.route("/").get(getAllProducts)
routers.route("/static").get(getAllProductsStatic)


// export
module.exports = routers;
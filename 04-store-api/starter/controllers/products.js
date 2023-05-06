//here we have the routes controllers

const getAllProductsStatic = async (req,res) => {
    res.status(200).json({
        msg:" products tesitng route"
    })
}
const getAllProducts = async (req,res) =>{
    res.status(200).json({
        msg:"products routee"
    })
}

module.exports = {
    getAllProducts,
    getAllProductsStatic
}
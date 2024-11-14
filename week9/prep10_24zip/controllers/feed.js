const Product = require("../models/product");

exports.createProduct = ( req, res, next) => {
    res.send("<h2> Made it to CreateProduct() </h2>")
}
exports.getProducts = ( req, res, next ) => {
    res.send("<h2> Made it to GetProducts </h2>")
}
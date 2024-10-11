// let products = [];
// exports.products = products;
const Product = require("../models/product");

exports.getAddProducts = (req, res) => {
    console.log("Inside controller")
    res.render('productForm', {
        pageTitle: 'Add New Product!!!!',
        message : "You need to get a life",
        activeAdmin : true
    });
};
exports.postAddProducts = (req, res) => {
    // const obj = { 'title' : req.body.title,
    //     'author' : req.body.author,
    //     'description' : req.body.description,
    // };
    // products.push( obj );
    let product = new Product( req.body.title,req.body.author,
                                req.body.description);
    product.save();
    let products = Product.fetchAll();
    let gotProducts = false;
    if ( products.length > 0){
        gotProducts = true;
    }
    res.render('productResults', {
        pageTitle: 'Here are the available products',
        products: products,
        gotProducts: gotProducts,
        activeAdmin : true

    });
}
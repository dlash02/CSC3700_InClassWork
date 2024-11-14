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
exports.postAddProducts = (req, res, next) => {
    // const obj = { 'title' : req.body.title,
    //     'author' : req.body.author,
    //     'description' : req.body.description,
    // };
    // products.push( obj );
    let product = new Product(req.body.title, req.body.author,
        req.body.description);
    product.save();
    // let products = Product.fetchAll();
    // console.log(products);
    // let gotProducts = false;
    // if (products.length > 0) {
    //     gotProducts = true;
    // }
    res.redirect("/shop")
}
    // res.render('productResults', {
    //     pageTitle: 'Here are the available products',
    //     products: products,
    //     gotProducts: gotProducts,
    //     activeAdmin : true
    // });
    // Adding getProducts
    exports.getProducts = (req, res,next ) => {
        // res.sendFile(path.join( rootDir, 'views', 'shop.html'));
        //const products = adminData.products;
        const products = Product.fetchAll(products => {
            console.log("Looging products" );
            console.log( products);
            let gotProducts = false;
            if ( products.length)
                 gotProducts = true;
            res.render('productResults', {
                products: products,
                gotProducts: gotProducts,
                pageTitle: "Shop My Site",
                from: "shop"});
        });
    }
``
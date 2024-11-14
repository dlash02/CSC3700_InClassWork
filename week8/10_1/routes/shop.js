const express = require('express');
const router = express.Router();
const path = require('path');
const adminData = require("./admin");
const Product = require("../models/product");
// ToDo ---- Check this
console.log("----");
console.log( adminData.products);
router.use(express.static(path.join(__dirname, '../public')))
const productsController = require('../controllers/products');
router.get('/shop', function (req, res) {
    // router.get('/shop', productsController.getProducts);
    // res.sendFile( path.join( __dirname, '../public/shopProducts.html' )
    // // );
    Product.fetchAll(products => {
        let gotProducts = false;
        if ( products.length > 0 ) gotProducts = true;
        res.render('productResults', {
            pageTitle: 'Here are the available products to shop',
            products: products,
            gotProducts: gotProducts,
            activeShop: true
        });
    });
});
router.get('/home', function (req, res) {
    res.sendFile( path.join( __dirname, '../public/shopHome.html' ) );
});
module.exports = router;
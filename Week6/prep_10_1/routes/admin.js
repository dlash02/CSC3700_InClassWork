const express = require('express');
const router = express.Router();
const path = require('path');
let products = [];
router.use(express.static(path.join(__dirname, '../public')));
router.get( '/add-product', ( req, res, next ) => {
    // res.sendFile( path.join( __dirname, '../public/productForm.html' ) );
    // res.sendFile(path.join(__dirname, "../views/productForm.html"));
    res.render('productForm', {
        pageTitle: 'Add New Product',
        message : "You need to get a life",
        fromAdmin: true
    });
})
router.post( '/product', ( req, res, next ) => {
    console.log( req.body );
    const obj = { 'title' : req.body.title, 'author' : req.body.author };
    products.push( obj );
    console.log( '------------------');
    console.log( products );
    let gotProducts = false;
    if ( products.length > 0){
        gotProducts = true;
    }
    // res.redirect( "/");
    // res.send( `Selection:${req.body.title} author:${req.body.author}`)
    res.render('productResults', {
        pageTitle: 'Here are the available products',
        products: products,
        gotProducts: gotProducts,
        fromAdmin: true
    });
})
// Todo: 0000  export this way
// module.exports = router;
exports.products = products;
exports.routes = router;

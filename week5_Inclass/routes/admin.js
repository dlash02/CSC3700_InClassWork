const express = require('express');
const router = express.Router();
const path = require('path');
let products = [];
router.get(  '/add-product', (req, res, next) => {
    let h = "<html> <body>";
    let h2 = "<h2> Add New Product </h2>";
    let f = "<form action='/product' method='post'>";
    let inBox = "<input type='text' name='title'/>";
    let but = "<button type='submit'>Add Product</button>"
    let fe = "</form> </body></html>";
    res.send(`${h} ${h2} ${f} ${inBox} ${but} ${fe}`);
});
router.post(  '/product', (req, res, next) => {
    // console.log( req );
    console.log("----flag")
    let t = req.body.title;
    products.push( {title: t})
    res.send(`Made it to post title:${t}`);
});

// module.exports = router;
exports.products = products;
exports.routes = router;
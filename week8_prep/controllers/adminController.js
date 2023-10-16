const adminData = require("../routes/admin");
// const Product = require("../models/oproduct");
const Product = require("../models/product");
// let products = [];
exports.getAddProduct = ( req, res, next) => {
    res.render( 'admin/addProduct',
        {
            from: 'addProduct'
        })
}
exports.postAddProduct = ( req, res, next) => {
    let t = req.body.title;
    let a = req.body.author;
    let p = req.body.price
    const product = new Product( t, a, p );
    product.save();
    // products.push({
    //     title: t,
    //     author: a,
    //     price: p
    // })
    res.redirect('/add-product')
}
exports.getProducts = ( req, res, next ) => {
    Product.fetchAll()
        .then ((rows, fieldData) =>{
            console.log("ROWS=>");
            console.log( rows );
            // res.send("It must works")
            res.render( 'admin/showProductsAdmin', {
                        title: "Show Available Products",
                        from: 'showProducts',
                        products : rows[0]
                    });
        }).catch( err => {
           console.log( "DB Error=>");
           console.log( err );
        })
}
exports.deleteProduct = ( req, res, next ) => {
    let id = req.params.id;
    Product.delete(id);
    console.log(`id:${id}`);
    // res.send("Happy day it is gone! id:" +id);
    res.redirect('/showAdmin');
}
exports.editProduct = ( req, res, next ) => {
    let id = req.params.id;
    console.log( "Inside Edit .... id=" +id );
    // fetch all the records and find the idth one
    Product.findById(id)
        .then ((rows, fieldData) =>{
            console.log("ROWS=>");
            console.log( rows[0][0] );
            // res.send("It must works")
            res.render( 'admin/ShowUpdateForm', {
                title : `Update record:${id} `,
                id : rows[0].id,
                from: 'updateProducts',
                product: rows[0][0]
            })
        }).catch( err => {
        console.log( "DB Error=>");
        console.log( err );
    })
}
exports.postUpdateProduct = ( req, res, next ) => {
    let id = req.body.productId;
    console.log(`id:${id}`);
    console.log( `author:${req.body.author}`)
    res.send("Happy day are here again made it to most update product" +id);
}
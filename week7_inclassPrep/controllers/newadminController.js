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
    // const products = Product.fetchAll();
    // res.render( 'showProducts', {
    //     title: "Show Available Products",
    //     from: 'showProducts',
    //     products : products
    // });
     Product.fetchAll( products => {
        res.render( 'admin/showProductsAdmin', {
            title: "Show Available Products",
            from: 'showProducts',
            products : products
        });
    });
}
exports.deleteProduct = ( req, res, next ) => {
    let id = req.params.id;
    console.log(`id:${id}`);
    res.send("Happy day" +id);
}
exports.postUpdateProduct = ( req, res, next) => {
    console.log(`Normally I would update id=${req.body.productId}`);
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
exports.editProduct = ( req, res, next ) => {
    let id = req.params.id;
    console.log(`id:${id}`);
    Product.fetchAll(products => {
        let ct = 0;
        for (let i = 0; i < products.length; i++) {
            if (i == id) {
                console.log("Returning proucts i=" +i);
                res.render('admin/ShowUpdateForm', {
                    title: "Show Available Products",
                    id: id,
                    from: 'showProducts',
                    product: products[i]
                });
                return;
            } else {
                console.log( `Not id:${id} product:${products[i].title} ct:${ct}`);
            }
        }
        res.render('admin/ShowUpdateForm', {
            title: "Show Available Products (null found)",
            from: 'showProducts',
            product: null
        });
    })
}

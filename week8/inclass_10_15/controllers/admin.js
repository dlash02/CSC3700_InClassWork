const Product = require( "../models/product");

exports.getAddProduct = ( req, res, next ) => {
    res.render('admin/add-product', {
        pageTitle: 'Add Product',
        pageHeader: 'Add New Product',
        addProductActive: true,
        addProductCSS: true });
    }
exports.postAddProduct = (req, res,next ) => {
    let product = new Product( req.body.title, req.body.price, req.body.description );
    product.save();

    let products = Product.fetchAll();
    let hasProducts = false;
    if ( products.length > 0) hasProducts = true;
    res.render('admin/adminProducts', {pageTitle: 'Our Product',
        hasProducts: hasProducts,
        adminProductsActive: true,
        pageHeader: 'Admin Products', prods : products});
};
exports.adminProducts = ( req, res, next ) => {
    let products = Product.fetchAll();
    console.log( `leng:${products.length}`)
    let hasProducts = false;
    if ( products.length > 0) hasProducts = true;
    res.render('admin/adminProducts', {
        pageTitle: 'Admin Product',
        pageHeader: 'Admin Products',
        adminProductsActive: true,
        hasProducts: true,
        prods : products,
        addProductCSS: true });
}

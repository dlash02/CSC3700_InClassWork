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
exports.postUpdateProduct = (req, res,next ) => {
    let id = req.body.id;
    let product = new Product( req.body.title, req.body.price, req.body.description);
    product.updateItem(id);
    console.log( `Insice postUpdateProduct id=${id}`);
    console.log( `title=${req.body.title}`);
    console.log(`Inside post description :${req.body.description}`);
    res.redirect('/admin/adminProducts');
}
exports.editProduct = (req, res,next ) => {
    let id = req.params.id;
    let product = Product.getItem( id );
    console.log(`Inside editProduct id:${id}`);
    console.log( product );
    if ( product) hasProducts = true;
    res.render('admin/edit-Product', {pageTitle: 'Our Product',
        hasProducts: hasProducts,
        adminProductsActive: true,
        product : product,
        addProductCSS: true,
        pageHeader: `Update This Product id:${id}` });
}
exports.deleteProduct = (req, res,next ) => {
    let id = req.params.id;
    console.log(`Inside delete id:${id}`);
    Product.delete( id );

    res.redirect('/admin/adminProducts');
}
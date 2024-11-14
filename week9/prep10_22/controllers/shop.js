const Product = require( "../models/product");


exports.showProducts = (req, res,next ) => {
    // let product = new Product( req.body.title, req.body.price, req.body.description );
    // product.save();
    // let products = Product.fetchAll();
    Product.fetchAll()
        .then(([products, fields]) => {
            console.log(products); // This will log all products
            console.log("----- FLAG1 ----- ")
            console.log(products);
            console.log(`leng:${products.length}`)
            let hasProducts = false;
            if (products.length > 0) hasProducts = true;
            res.render('shop/shopProducts', {
                pageTitle: 'Our Product',
                hasProducts: hasProducts,
                shopActive: true,
                pageHeader: 'Available Products', prods: products
            });
        })
        .catch((err) => {
            console.error('Error fetching products:', err);
        });
}


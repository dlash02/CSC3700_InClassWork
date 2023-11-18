const express = require('express');
const router = express.Router();
const path = require('path');
const booksController = require("../controllers/booksController")
router.get( '/books', booksController.getProducts);

// router.get( '/add-product', adminController.getAddProduct );
// router.post( '/product', adminController.postAddProduct);
// router.get( '/showAdmin', adminController.getProducts);
// router.get( '/deleteItem/:id', adminController.deleteProduct);
// router.get( '/editItem/:id', adminController.editProduct);
// router.post( '/postUpdateProduct', adminController.postUpdateProduct);

exports.routes = router;
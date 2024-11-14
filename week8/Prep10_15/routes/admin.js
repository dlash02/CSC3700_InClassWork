const path = require("path");
const express = require('express');
const router = express.Router();
const productsController = require("../controllers/admin");
router.get('/add-product', productsController.getAddProduct )
router.post( '/add-product', productsController.postAddProduct );
router.get( '/adminProducts', productsController.adminProducts );
router.get( '/deleteItem/:id', productsController.deleteProduct );
router.get( '/editItem/:id', productsController.editProduct );
router.post( '/postUpdateProduct', productsController.postUpdateProduct );

exports.routes = router;

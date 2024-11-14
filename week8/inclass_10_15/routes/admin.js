const path = require("path");
const express = require('express');
const router = express.Router();
const productsController = require("../controllers/admin");
router.get('/add-product', productsController.getAddProduct )
router.post( '/add-product', productsController.postAddProduct );
router.get( '/adminProducts', productsController.adminProducts );

exports.routes = router;

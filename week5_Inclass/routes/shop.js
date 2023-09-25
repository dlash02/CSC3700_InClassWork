const express = require('express');
const router = express.Router();
const path = require('path');
const adminData = require("./admin");
router.get(  '/showProducts', (req, res, next) => {
    console.log( "----------------");
    console.log( adminData.products);
    res.sendFile( ( path.join(__dirname, '../views', 'showProducts.html')));
});
module.exports = router;
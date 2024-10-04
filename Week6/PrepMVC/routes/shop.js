const express = require('express');
const router = express.Router();
const path = require('path');
router.use(express.static(path.join(__dirname, '../public')))
router.get('/shop', function (req, res) {
    res.sendFile( path.join( __dirname, '../public/shopProducts.html' ) );
});
router.get('/home', function (req, res) {
    res.sendFile( path.join( __dirname, '../public/shopHome.html' ) );
});
module.exports = router;
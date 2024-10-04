const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
app.use(express.static(path.join(__dirname, 'public')));
app.use( bodyParser.urlencoded( { extended: true }) );
app.get( '/add-product', ( req, res, next ) => {
    res.sendFile( path.join( __dirname, 'public/productForm.html' ) );
})
app.post( '/product', ( req, res, next ) => {
    console.log( req.body );
    // res.redirect( "/");
    res.send( `Selection:${req.body.title} author:${req.body.author}`)
})
app.use( '/', ( req, res, next ) => {
        res.send("<h1> Page not found </h1>")
})

const server = http.createServer(app);
const port = 3000;
server.listen(port );
console.log(`Listening on port ${port}`);
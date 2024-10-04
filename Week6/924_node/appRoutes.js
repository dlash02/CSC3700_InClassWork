const http = require('http');
const express = require('express');
const bodyParser = require('body-parser');
const path = require('path');
const app = express();
const adminRoutes = require('./routes/admin');
app.use(express.static(path.join(__dirname, 'public')));
app.use( bodyParser.urlencoded( { extended: true }) );
app.use( adminRoutes );

app.use( '/', ( req, res, next ) => {
        // res.send("<h1> Page not found </h1>")
        // res.status(404).sendFile( path.join( __dirname, 'views/404NotFound.html' ) );
        res.status(404).render( path.join( __dirname, 'views/404NotFound.html' ) );
})

const server = http.createServer(app);
const port = 3000;
server.listen(port );
console.log(`Listening on port ${port}`);
const express = require("express");
const app = express();

const  product = {
    title : 'My Book',
    price : 12.99,
    author : "Some dude"
}
// app.set( 'view engine', 'pug'); // set engine
// app.set( 'views', 'views'); // set views
const db = require("./util/database");

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

app.use( bodyParser.urlencoded({extended: false})); // middleware for body
app.use( express.static( path.join(__dirname, 'public')));
app.use( adminRoutes.routes);
app.use( shopRoutes);

// app.use( ( req, res, next ) => {
app.get('*', function(req, res){
    res.send( product );
})
let port = 3025;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);

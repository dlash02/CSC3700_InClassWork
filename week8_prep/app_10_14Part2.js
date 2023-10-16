const express = require("express");
const app = express();
app.set( 'view engine', 'pug'); // set engine
app.set( 'views', 'views'); // set views
const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");

const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");
const db = require("./util/database");

db.execute( 'select * from products')
    .then( result => {
        console.log("res=");
        console.log( result );
    })
    .catch( err => {
        console.log("DB Error" + err );
    })
app.use( bodyParser.urlencoded({extended: false})); // middleware for body
app.use( express.static( path.join(__dirname, 'public')));
app.use( adminRoutes.routes);
app.use( shopRoutes);

app.get('*', function(req, res){
    let pt = "Sorry, Jack ... Page Not Found"
    res.render( 'notFound', {title:pt,
        subTitle: "Try again",
       });
})
let port = 3003;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);

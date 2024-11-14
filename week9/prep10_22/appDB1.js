const path = require("path");
const express = require("express");
const bodyParser = require('body-parser');

const adminRoutes = require("./routes/admin");
const shopRoutes = require("./routes/shop");
const expressHbs = require('express-handlebars');
const app = express();

// app.engine('handlebars', expressHbs());
app.engine('hbs', expressHbs.engine({ extname: "hbs", defaultLayout: "main-layout", layoutsDir: "views/layouts", }));
app.set('view engine', 'hbs');
app.set('views', 'views');

const db = require("./util/database");
db.execute('select * from products ' )
    .then ( result  => {
        console.log("----Result=");
        console.log(result);
    })
    .catch( err => {
        console.log( "DB Error=" + err);
    })
app.get('*', function(req, res){
    // res.status(404).send("<h2> Request not found </h2>")
    //;
    let pt = "Sorry, Jack ... Page Not Found"
    let gotMilk = false;
    let age = 15;
    let myProds = [ "Pizza", "Pears", "Pumpkin", "Plumbs"]
    res.render( '404', {title:pt,
        subTitle: "Try again",
        gotMilk: gotMilk,
        age: age,
        pList : myProds
       });
})

let port = 3011;
console.log( `listen on http://localhost:${port}`);

app.listen( port );

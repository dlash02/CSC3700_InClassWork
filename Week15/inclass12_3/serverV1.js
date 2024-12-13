require( 'dotenv' ).config();
const jwt = require('jsonwebtoken');
const express =  require ('express');
const {application} = require("express");
const app = express();

const posts = [
    { userName: "herman", title : "Favorite Scare Tactics"},
    { userName: "grandpa", title : "How to be scary"},
];

app.use(express.json());

app.get( "/posts", authenticToken, (req, res) => {
    console.log("YSer=");
    console.log( req.user.name);
    let resFilter =  posts.filter( post => post.userName === req.user.name );
    res.json(  resFilter );
});
function authenticToken(req, res, next) {
    const authToken = req.headers.authorization;
    const token = authToken.split(' ')[1];
    if ( token == null){
        return res.status(401).send( "No token provided");
    }
    // else
    jwt.verify( token, process.env.ACCESS_TOKEN_SECRET, ( err, user ) => {
        if ( err ){
            return res.status(403).send("Invalid token");
        }
        req.user = user;
        next();
    })
}
app.post("/login", (req, res) => {
    // Do the stuff we did earlier to athenticate
    //  user and password
    const userName = req.body.username;
    const password = req.body.password;
    // On successfule authenticate
    const user = { name: userName };
    const accessToken = jwt.sign( user, process.env.ACCESS_TOKEN_SECRET);
    res.send( {accessToken} );
})

let port = process.env.PORT;
app.listen( port );
console.log(`Listening on port http:/localhost:${port}`);
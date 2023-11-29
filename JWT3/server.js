require('dotenv').config();
const express = require('express');
const http = require("http");

const app = express();
const jwt = require('jsonwebtoken');
const {sign} = require("jsonwebtoken");
app.use( express.json()); // Use json middle to parse
const books = [
    {
        'title': 'The Hobbit',
        'author': 'J. R. Tolkien',
        'price': 12.99
    },
    {
        'title': 'Dune',
        'author': 'F. Herbert',
        'price': 13.99
    }
]
app.get('/books', authenticateToken, (req, res) => {
    res.json( books );
})
// app.post('/login', (req, res) => {
//     //authenticate user
//     const userName = req.body.username;
//     const user = { name: userName};
//     const accessToken = jwt.sign( user, process.env.ACCESS_TOKEN_SECRET );
//     res.json( {accessToken: accessToken});
// })
app.get('/', (req, res) => {
    res.send("Welcome home")
})
function authenticateToken(req, res, next){
    const authHeader = req.headers['authorization'];
    const token = authHeader && authHeader.split(" ")[1];
    console.log( "FL0->"); console.log( token );
    console.log( "FL0b->"); console.log( authHeader );
    if ( token == null ) return res.sendStatus(401);
    jwt.verify( token, process.env.ACCESS_TOKEN_SECRET, ( err, user ) => {
        console.log( "FL1"); console.log( err );
        if( err) return res.sendStatus(403);  // See you have a invalid token
        req.user = user;  // Have valid token
        next();   // move on from middleware
    })
}
const port = "3000";
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);
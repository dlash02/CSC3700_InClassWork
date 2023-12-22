require('dotenv').config();
const express = require('express');
const http = require("http");
const app = express();
const jwt = require('jsonwebtoken');
app.use( express.json());

const books = [
    {
        'title': 'The Hobit',
        'author': 'Tokien',
        'price': 12.99
    } ,
    {
        'title': 'Dune',
        'author': 'Herbert',
        'price': 13.99
    }
];
app.get("/books", (req, res ) => {
    res.json( books);
});
app.post("/login", (req, res ) => {
    // Authenticate the user (user & pw)
    const userName = req.body.username;
    const user = { name : userName }
    const accessToken = jwt.sign( user, process.env.ACCESS_TOKEN_SECRET);
    // res.send( "Inside Post ");
    res.json( { accessToken: accessToken});
});
app.get("/", (req, res ) => {
    // Authenticate the user is who they say they are
    res.send( "Welcome Human!");
});
const port = 3000;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`)

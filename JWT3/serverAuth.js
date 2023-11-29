require('dotenv').config();
const express = require('express');
const http = require("http");

const app = express();
const jwt = require('jsonwebtoken');
const {sign} = require("jsonwebtoken");
app.use( express.json()); // Use json middle to parse
let refreshTokens = [];

app.post('/token', (req, res) => {
    const refreshToken = req.body.token;
    if ( refreshToken == null) return res.sendStatus(401); // forbidden
    if ( refreshTokens.includes( refreshToken)){
        return res.sendStatus(403); // No access
    }
    jwt.verify( refreshToken, process.env.REFRESH_TOKEN_SECRET, (err, user ) => {
        if ( err ) return re.sendStatus( 403);
        const accessToken = generateAccessToken( {name: user.name });
        res.json( {accessToken: accessToken } );
    })
})
app.post('/login', (req, res) => {
    //authenticate user
    const userName = req.body.username;
    const user = { name: userName};
    const accessToken = generateAccessToken( user );
    // create also refresh token w/o expire
    const refreshToken = jwt.sign( user, process.env.REFRESH_TOKEN_SECRET );
    refreshTokens.push( refreshToken);
    res.json( {accessToken: accessToken, refreshToken: refreshToken});
})
app.get('/', (req, res) => {
    res.send("Welcome home")
})
function generateAccessToken( user ) {
      const accessToken = jwt.sign( user, process.env.ACCESS_TOKEN_SECRET, {expiresIn : '30s'} );
      return accessToken;
}

const port = "4000";
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);
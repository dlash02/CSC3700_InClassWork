require('dotenv').config();
const express = require("express");
const jwt = require('jsonwebtoken');
const app = express();
app.use(express.json()); // app can use JSON from the body passed into it
let refreshTokens = []; // normally use DB

app.post( "/refresh", (req, res) => {
    const authHeader = req.headers.authorization;
    const refreshToken = authHeader && authHeader.split(" ")[1];
    // const refreshToken = req.body.token;
    console.log( "Refresh Token: ", refreshToken);
    if ( refreshToken == null){
        console.log( "Refresh Token is null");
        return res.sendStatus(401);
    }
    if ( refreshTokens.includes( refreshToken)){
        jwt.verify(refreshToken, process.env.REFRESH_TOKEN_SECRET, (error, user ) => {
            if ( error ) {
                console.log("auth1 error"); console.log( error );
                console.log( "JWT="); console.log( jwt);
                return res.sendStatus(403);  //Token no longer vaild = 403
            }
            const accessToken = generateAccessToken( { name: user.name});
            console.log(`Got AccessToekn:${accessToken}`);
            res.json( { accessToken: accessToken});
        });
    } else {
        console.log("Sending 403");
        console.log("Not there:"); console.log( refreshTokens );
        return res.sendStatus(403);

    }

})
app.post( '/login', (req,res) =>{
    // authenticate the user
    const userName = req.body.userName;
    const user = { name : userName}
    const accessToken = generateAccessToken( user );
    const refreshToken = jwt.sign( user, process.env.REFRESH_TOKEN_SECRET ); // no expire
    refreshTokens.push( refreshToken );  // save them
    const response = { "name" : userName,
        "accessToken" : accessToken,
        "refreshToken" : refreshToken
    };
    console.log( response);
    res.json( response );

})
app.delete( "/logout", (req, res) => {
    refreshTokens = refreshTokens.filter( token => token !== req.body.token );
    res.sendStatus( 204);
})
function generateAccessToken( user ){
    // const expire = { expiresIn: '15m'}
    const expire = { expiresIn: '3m'}
    const accessToken = jwt.sign( user, process.env.ACCESS_TOKEN_SECRET, expire );
    return accessToken
}
let port2 = process.env.REFRESH_PORT;
app.listen( port2 );
console.log(`listening on http://localhost:${port2}`);
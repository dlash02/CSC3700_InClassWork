const express =  require ('express');
const app = express();
const jwt = require('jsonwebtoken');
require('dotenv').config();
const posts = [
    {
        userName: 'Herman',
        title:  'My favorite Scare Tactics'
    },
    {
        userName: 'GrandPa',
        title:  'GrandPa is scary',
    },
    {
        userName: 'Jake',
        title:  'Jakes Theory on the Munsters',
    }

]
// let app use JSON
app.use( express.json());

app.get('/posts',authenticateToken, (req, res) => {
    console.log(`verified User:${req.user.name}`);

    res.json( posts.filter( book => book.userName === req.user.name ) );
    // res.json(posts);
})
// app.post('/login', (req, res) => {
//     //Authenticate user
//     const userName = req.body.userName;
//     if ( !userName ) {
//         res.send( "Bad username=" + userName );
//     }
//     const password = req.body.password;
//     const user = { name: userName }; // want to serialize inof
//     const accessToken =  jwt.sign(user, process.env.ACCESS_TOKEN_SECRET);
//     res.json( {accessToken} );
// })
function authenticateToken( req, res, next) {
    // token will come from auhthorization header
    // BEARER TOKEN
    const authHeader = req.headers.authorization;
    const token = authHeader && authHeader.split(" ")[1];
    console.log( `Token ${token}` );
    console.log(`authHeader: ${authHeader}`);
    if ( token == null ) {
        return res.status(401).send("No token provided");
    }
        jwt.verify( token, process.env.ACCESS_TOKEN_SECRET, ( err, user ) => {
        if ( err ){
            return res.status(403).send("Invalid token");
        }
        req.user = user;
        next();
    });
}
const port = 3001;
app.listen( port );
console.log(`Server started on http://localhost:${port}`);
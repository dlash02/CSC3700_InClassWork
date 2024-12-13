const express = require('express');
const cors = require('cors');
const app = express();
const UserModel = require("./models/UserModel");

const port = 3335;
app.use(cors( {
    orgin: '*',
    method: ['GET', 'POST', 'PUT', 'DELETE']
}));

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get( '/create-default-user', async ( req, res ) => {
    try {
        const result = await UserModel.addDefaultUser();
        res.status( 200).json( {
            message: "User Successfully Created"
        })
    } catch ( error ){
        res.status( 400 ).json( error )
    }
})
app.listen( port, () => {
    console.log(`Listen on http://localhost:${port}`);
})
const express = require("express");
const app = express();
const adminRoutes = require("./routes/admin2");
const shopRoutes = require("./routes/shop");
const path = require("path");
app.use(express.static(path.join(__dirname, 'public')));  // add middleware
const bodyParser = require('body-parser');
app.use( bodyParser.urlencoded({extended: false}));  // middleware and parses body

app.use( shopRoutes );  // look to shopRoutes
app.use( adminRoutes );
app.use( (req, res, next) => {
  res.status(404).send("<h2> Request is not Found</h2>" );
})
let port = 3001;
console.log( `listen on http://localhost:${port}`);
app.listen( port )


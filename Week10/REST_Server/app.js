const express = require("express");
const app = express();
const db = require("./util/database");
const booksRoutes = require("./routes/books");
app.use( booksRoutes.routes);

const bodyParser = require("body-parser");
const path = require("path");
const http = require("http");

app.use( bodyParser.urlencoded({extended: false})); // middleware for body



let port = 3028;
const server = http.createServer(app);
server.listen( port );
console.log( `Listening on http://localhost:${port}`);

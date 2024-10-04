const http = require('http');
const router = require('./router');
const server = http.createServer( router );

const PORT = 5000;
console.log( `Listening on port:${PORT} `);
server.listen( PORT );
const http = require("http");
const routes = require("./routes");

// execute routes as a function for incoming routes.
const server = http.createServer(  routes );

// listen on a port for requests
let port = 3003
console.log( `listen on http://localhost:${port}`);
server.listen(port);


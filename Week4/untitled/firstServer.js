const http = require("http");

const server = http.createServer((req, res) => {
    // console.log( req );
    console.log( req );
});

const PORT = 3000;
console.log(`FL1:listening on Port:${PORT}`);
server.listen(PORT);

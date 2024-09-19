// can also include a local file e.g., ./myModule
const http = require("http");


const server = http.createServer(  (req, res) =>  {
    // event driven ... when request happens
    // do this anon function
    // console.log( `url:${req.url} method:${req.method} hdr:${req.headers}`);
    // console.log(req.headers);
    // set header to have browser expect html back
    res.setHeader( 'Content-Type', 'Text/html');
    res.write( '<html>');
    res.write( '<head><title>My Title</title></head>');
    res.write( '<body><span style="color:red">A Sample HTML PAge</span></body>');
    res.write( '</html>');
    res.end();

    //console.log( req );
} );

// listen on a port for requests
let port = 3000
console.log( `listen on http://localhost:${port}`);
server.listen(port);


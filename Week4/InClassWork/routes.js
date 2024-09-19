
const fs = require("fs");


const requestHandler = (req, res) => {``
    const method = req.method;
    const url = req.url;
    res.setHeader('Content-Type', 'Text/html');
    if (url === "/") {
        res.write('<html>');
        res.write('<head><title>Enter Text</title></head>');
        res.write('<body><h1> Enter Text and Click </h1>');
        res.write('<form method="POST" action="/message" />');
        res.write('<input type="text" name="msg"> <button type="submit"> send it </button>');
        res.write('</form></body>');
        res.write('</html>');
        return res.end(); // so return from here and not continue
    }
    if (url === '/message' && method === 'POST') {
        // Get the data from stream
        const body = [];
        req.on('data', (chunk) => {
            console.log("chunk:")
            console.log(chunk)
            body.push(chunk)
        });
        req.on('end', () => {
            const parsed = Buffer.concat(body).toString();
            console.log(`parsedBody=${parsed}`);
            console.log(parsed);
            const msg = parsed.split("=")[1];
            console.log(`msg=${msg}`);
            res.write('<html>');
            res.write('<head><title>Got Msg </title></head>');
            res.write('<body><h1> Received your message </h1>');
            res.write(`<span style='color:blue'> msg=${msg}</span>`);
            res.write('</body>');

            res.write('</html>');
            fs.writeFileSync("Message.txt", msg);
            return res.end(); // so return from here and not continue
        });
        // res.write('<html>');
        // res.write('<head><title>Enter Text</title></head>');
        // res.write('<body><h1> Default Page  </h1>');
        // res.write(`<span style='color:blue'> This is a default page</span>`);
        // res.write('</body>');
        // res.write('</html>');
        // return res.end(); // so return from here and not co

    }
};

module.exports = requestHandler;

// module.exports = {
//     handler: requestHandler,
//     someText: "Some hard coded text"
// }
// modules.export.handler = requestHandler;
// modules.export.someText = "Some hard coded text"
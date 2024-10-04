const http = require('http');
const fs = require('fs');
const requestHandler = (req, res) => {
    const url = req.url;
    const method = req.method;
    if (url === "/") {
        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.write(`<html><body> <h2> URL:${url} </h2>`);
        res.write("<form method='POST' action='/message' > ");
        res.write("<br /> Message <input type='text' name='msg' placeholder='message is here' />");
        res.write("<br /> <button type='submit'> Submit it</button>")
        res.write(`</form> </body></html>`);
        res.end();
    } else if (url === "/message" && method === "POST") {
        const body = [];
        req.on('data', (chunk) => {
            body.push(chunk);
        });
        req.on('end', () => {
            const parsedBody = Buffer.concat(body).toString();
            console.log("--->>");
            console.log(parsedBody);
            res.setHeader('content-type', 'text/html; charset=utf-8');
            res.write(`<html><body> <h2> Message Received </h2>`);
            res.write(`body:${parsedBody}`);
            res.write("</body></html>");
            res.end();
        })
        console.log("Hellow There ")
        // res.setHeader('content-type', 'text/html; charset=utf-8');
        // res.write(`<html><body> <h2> Message Received </h2>`);
        // res.write( "How do I get the message?");
        // res.write("</body></html>");
        // res.end();
    } else if (url === "/message" && method === "GET") {
        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.write(`<html><body> <h2> GET THE MESSage </h2>`);
        res.write("still don't know how to get the message");
        res.write("</body></html>");
        res.end();
    } else {
        res.setHeader('content-type', 'text/html; charset=utf-8');
        res.write(`<html><body> <h2> Unknow Path:${url} </h2>`);
        res.write(`</body></html>`);
        res.end();
    }
}
module.exports = requestHandler;
// module.exports = {
//     handler : requestHandler,
//     someText : "Hello World",
// }
// module.exports.hander = requestHandler;
// module.exports.someText = "Beanhead";
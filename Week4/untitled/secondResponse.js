const http = require('http');
const fs = require('fs');

const server = http.createServer((req,res) => {
     const url = req.url;
     const method = req.method;
     if ( url === '/'){
          res.setHeader( 'Content-type', 'text/html');
          res.write("<html><body> <h2> My Input Form </h2>");
          res.write("<form action='/message' method='POST'> Name!: <input type='text' name='message'> ");
          res.write("<br/> <button type='submit'> Send Data </button>");
          res.write("</form>");
          res.write("</body></html>");
          return res.end(); // Quit function execution
     }
     else if ( url === '/message' && method === "POST"){
          const body = [];
          req.on('data', (chunk) => {
               console.log("Fl2: Second  chunk=" +chunk);
               body.push( chunk )
          });
          req.on( 'end', () => {
               const parsedBody = Buffer.concat(body).toString(); // req body is text
               console.log("FL3: Third Item ");
               res.setHeader('Content-type', 'text/html');
               let str = "<html><body> <h2> Receiving message </h2>"
               res.write(str);
               res.write("<h2> The Body </h2>");
               res.write(parsedBody);
               const justMsg = parsedBody.split("=")[1];
               res.write("<br /> JustMsg is ")
               res.write(justMsg);
               // fs.writeFileSync('message.txt', justMsg);
               fs.writeFile( "message.txt", justMsg, (err) => {
                    res.write("<br /> file written");
                    res.write("</body></html>");
                    res.end();
               })

          });
          console.log("FL1: This is first");
     } else {
          // res.setHeader('Location', '/');
          // return res.end();
          res.setHeader( 'Content-type', 'text/html');
          let str = "<html><body> <h2> Illegal Path </h2>"
          res.write( str );
          res.write( "<a href='/'> The Form </a>");

          res.end();
     }

});

const PORT = 3000;
console.log(`listening on ${PORT}`);
server.listen( PORT );
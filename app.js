const http = require("http");
const fs = require("fs");

const server = http.createServer((req, res) => {
  console.log(req);
  const url = req.url;
  const method = req.method;
  if (url === "/") {
    res.write("<html>");
    res.write("<head><title>My First Page</title></head>");
    res.write(
      "<body><form action='/message' method='POST'><input type='text' name='message'><button type='submit'>Send</button></form></body>"
    );
    res.write("</html>");
    return res.end();
  }

  if (url === "/message" && method === "POST") {
    fs.writeFileSync("message.txt", "DUMMY TEXT");
    res.statusCode = 302;
    res.setHeader("Location", "/");
    return res.end();
  }

  res.setHeader("Content-Type", "text/html");
  res.write("<html>");
  res.write("<head><title>My First Page</title></head>");
  res.write("<body><h1>Hello from Node.js</h1></body>");
  res.write("</html>");
  res.end();
});
/**
 * .listen() method starts a process where nodejs will not immediately exit our script
 * but where nodejs will instead keep this running to listen for incoming requests
 */

server.listen(3000);

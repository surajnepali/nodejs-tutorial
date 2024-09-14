const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
});
/**
 * .listen() method starts a process where nodejs will not immediately exit our script
 * but where nodejs will instead keep this running to listen for incoming requests
 */

server.listen(3000);

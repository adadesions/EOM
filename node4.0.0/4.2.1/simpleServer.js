'use strict'
//Load http module
let http = require('http');

// let data = ['Ada','Code','I/O','Node.js'];
//Configure our HTTP server
let server = http.createServer(function (request, response) {
  response.writeHead(200, {"Content-Type": "text/html"});
  // for(let d of data)
  response.write("<h3>ADACODE.io says</h3><br><br>");
  response.end("<b>End HTTP : AdaCode.io</b>");
})

//Server listening
server.listen(8000);

//Put to the terminal
console.log("Server running at http://localhost:8000");

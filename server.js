
var http = require('http');

//Demo
var handleRequest = function(request, response) {
  console.log('Received request for URL: ' + request.url);
  response.writeHead(200);
  response.end('Hello World There!');
};
var www = http.createServer(handleRequest);
www.listen(8080);
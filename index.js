var quick = require('./quick');
var http = require('http');

var server = http.createServer(function(req, res){
  res.writeHead(200);
  res.write("Hooray! We're creating a server here!");
  res.end();
});

server.listen(3000);

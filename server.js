var http = require('http');

http.createServer(function(req,res){
  res.writeHead(200);
  res.write("We made it! \n\n");
  res.end();
}).listen(6000);

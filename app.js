var bankAccount = require('./bank-account');
var http = require('http');

console.log(bankAccount.message);
console.log(bankAccount.dollarAmmount);

http.createServer(function(req, res){
  res.writeHead(200);
  res.write(bankAccount.message + bankAccount.dollarAmmount);
  res.end();
}).listen(3000);

console.log('listening on port 3000');

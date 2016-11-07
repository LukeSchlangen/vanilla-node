var randomNumber = require('./random-number');
var dollarConverter = require('./dollar-converter');

exports.dollarAmmount = dollarConverter(randomNumber(100, 1000000));
exports.message = "Account Balance: \n";

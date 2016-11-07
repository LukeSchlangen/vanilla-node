var converter = function(ammount) {
  return ammount.toLocaleString('en-US', { style: 'currency', currency: 'USD' });
}

module.exports = converter;

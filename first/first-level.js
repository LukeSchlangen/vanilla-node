var secondLevel = require('./second/second-level');

var firstLevel = {
  secondLevel: secondLevel,
  firstLevel: "BWAH"
}

module.exports = firstLevel;

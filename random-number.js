function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  randomNumber = Math.floor(Math.random() * (max - min)) + min;
  return randomNumber;
}

module.exports = getRandomInt;

var model = require('./model.js');
var valuer = require('./metal-valuer.js');

var valueMetal = function(inputArray, length) {
  var metal = inputArray[length - 4];
  var galCurrencies = inputArray.slice(0, length - 1);
  var value = valuer.metalValuer(galCurrencies, metal);
  model.setMetalValue(metal, value);
};

var stringParser = function(input) {
  var inputArray = input.split(" ");
  var length = inputArray.length;
  if (length == 3) {
    model.setGalaxyRomanValue(inputArray[0], inputArray[2]);
  } else if (inputArray[length - 1] == 'Credits') {
    valueMetal(inputArray, length);
  } else if (inputArray[length - 1] == '?') {
    console.log(" Print the value of the metal");
  }
};


module.exports = {
  stringParser
};

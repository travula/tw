const model = require('./model.js');
var mapRomanToDecimal = require("./r-to-d-converter.js");



var metalValuer = function(galCurrencies, value) {
  var romans = galCurrencies.map( (el, ci, arr) => {
    return model.getGalaxyRomanValue(el);
  });

  var inDec = mapRomanToDecimal(romans.join(""));
  return value / inDec;
};

module.exports = {
  metalValuer,
  valueMetal
};

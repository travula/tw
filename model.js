const romanToDecimalDict = {
  I: 1,
  V: 5,
  X: 10,
  L: 50,
  C: 100,
  D: 500,
  M: 1000
};

var galaxyToRomanDict = {};

var setGalaxyRomanValue = function(galaxy, roman) {
  galaxyToRomanDict[galaxy] = roman;
};

var getGalaxyRomanValue = function(galaxy) {
  return galaxyToRomanDict[galaxy];

};


var metalToValueDict = {};

var setMetalValue = function(metal, val) {
  metalToValueDict[metal] = val;
};

var getMetalValue = function(metal) {
  return metalToValueDict[metal];

};

module.exports = {
  romanToDecimalDict,
  setGalaxyRomanValue,
  getGalaxyRomanValue,
  setMetalValue,
  getMetalValue
};

const romanToDecimalDict = require('./model.js').romanToDecimalDict;
                                                                                                                   
var mapRomanToDecimal = function(roman) {
  var arr = Array.from(roman);
  var decArr = arr.map((el, ci, arr) => {
    return romanToDecimalDict[el];
  });

  var filArr = decArr.filter( (el, ci, arr) => {
    if (ci == arr.length - 1) {
      return true;
    } else {
      if (el < arr[ci + 1]) {
        arr[ci + 1] -= el;
        return false;
      }
      return true;
    }
  });

  return filArr.reduce( (acc, cv) => {
    return acc + cv;
  });
};

module.exports = {
  mapRomanToDecimal
};

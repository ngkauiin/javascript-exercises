const convertToCelsius = function(F) {
  return roundNumberTo((F-32)*5/9, 1);
};

const convertToFahrenheit = function(C) {
  return roundNumberTo(C*9/5+32, 1);
};

function roundNumberTo(num, precision) {
  let multiplier = Math.pow(10, precision || 0);
  return Math.round(num*multiplier)/multiplier;
}

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

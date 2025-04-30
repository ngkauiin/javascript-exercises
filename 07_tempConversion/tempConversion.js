const convertToCelsius = function() {
};

const convertToFahrenheit = function() {
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

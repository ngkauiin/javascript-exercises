const add = function(value_1, value_2) {
  return value_1+value_2;	
};

const subtract = function(value_1, value_2) {
	return value_1-value_2;
};

const sum = function(array) {
  return array.reduce((sum, value) => sum += value, 0);
};

const multiply = function(array) {
  let result = 1;
	for (const item of array) {
    result *= item;
  }
  return Number(result);
};

const power = function(value,toPower) {
  return Math.pow(value,toPower);	
};

const factorial = function(value) {
  if (value === 0) return 1;

  // Multiply from the starting value to 1
  // Use for loop to countdown from (value-1) to 1
	for (i=value-1; i>=1; i--) {
    value *= i;
  }
  return value;
};

// Do not edit below this line
module.exports = {
  add,
  subtract,
  sum,
  multiply,
  power,
  factorial
};

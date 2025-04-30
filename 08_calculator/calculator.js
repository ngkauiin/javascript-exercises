const add = function(value_1, value_2) {
  return value_1+value_2;	
};

const subtract = function(value_1, value_2) {
	return value_1-value_2;
};

const sum = function(array) {
  let sum = 0;
	for (const item of array) {
    sum += item;
  }
  return Number(sum);
};

const multiply = function() {
  
};

const power = function() {
	
};

const factorial = function() {
	
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

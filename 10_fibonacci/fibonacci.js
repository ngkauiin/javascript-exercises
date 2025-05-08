const fibonacci = function(number) {
  if (number < 0) return 'OOPS'

  let fibonacciNumber = {
    0:0,
    1:1,
  }

  for (let n = 2; n <= number; n++) {
    fibonacciNumber[n] = fibonacciNumber[n-1]+fibonacciNumber[n-2];
  }
  return fibonacciNumber[number];
};

// Do not edit below this line
module.exports = fibonacci;

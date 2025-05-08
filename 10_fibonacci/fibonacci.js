const fibonacci = function(number) {
  // create an object {0:0 ,1:1}
  // Do the given number (n) - 2 times (use for loop) more calculation to store as n: object[n-1]+object[n-2]
  // return the last element

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

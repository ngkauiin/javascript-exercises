const sumAll = function(numOne, numTwo) {
  let sum = 0;
  
  let startNum, lastNum;
  (numOne> numTwo) ? lastNum = numOne : lastNum = numTwo;
  (lastNum === numOne) ? startNum = numTwo : startNum = numOne;
  for (i=startNum; i<=lastNum; i++) {
    sum +=i;
  }
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

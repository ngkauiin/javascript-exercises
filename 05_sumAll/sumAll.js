const sumAll = function(numOne, numTwo) {
  let sum = 0;

   if ((numOne <0 || numTwo <0) ||
   (numOne % 1 !== 0 || numTwo % 1 !== 0 ))
   {
    return 'ERROR';
   }

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

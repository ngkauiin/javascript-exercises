const reverseString = function(string) {
  let newString = "";
  for (i=0; i<string.length; i++) {
    newString = newString.concat(string.at(-1+i*-1));
  }
  return newString;
};

// Do not edit below this line
module.exports = reverseString;

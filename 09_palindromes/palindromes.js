const palindromes = function (string) {
  const array = string.split('');
  const filteredArray = array
                          .filter((char) => char.match(/[a-z0-9]/i))
                          .map((char) => char.toLowerCase());
  const reverseArray = filteredArray.slice().reverse();
  return filteredArray.every((letter, index) => letter === reverseArray[index]);
};

// Do not edit below this line
module.exports = palindromes;

const removeFromArray = function(array, removeItem) {
  return array.toSpliced(array.indexOf(removeItem),1);
};

// Do not edit below this line
module.exports = removeFromArray;

const removeFromArray = function(array, ...removeItem) {
  let i = 0;
  while (i<removeItem.length) {
    array = array.filter(matchItem);
    i++;
  }
  return array;

  function matchItem(item) {
    return item !== removeItem[i];
  }
};

// Do not edit below this line
module.exports = removeFromArray;

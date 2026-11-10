const removeFromArray = function(arr, ...others) {

  return arr.filter(num => !others.includes(num));
};

// Do not edit below this line
module.exports = removeFromArray;

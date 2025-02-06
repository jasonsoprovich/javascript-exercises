const removeFromArray = function(inputArray, ...removeItem) {
  
  const outputArray = [];

  for (let i = 0; i < inputArray.length; i++) {
    let toRemove = false;
    for (let x = 0; x < removeItem.length; x++) {
      if (inputArray[i] === removeItem[x]) {
        toRemove = true;
        break;
      }
    } 
    if (toRemove === false) {
    outputArray.push(inputArray[i]);
    }
  }
  return outputArray;
};

// Do not edit below this line
module.exports = removeFromArray;

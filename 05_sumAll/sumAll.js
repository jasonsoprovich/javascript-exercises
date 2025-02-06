const sumAll = function(firstInt, lastInt) {
  let i;
  let sum = 0;

  if ( firstInt < 0 
    || lastInt < 0 
    || Number.isInteger(firstInt) !== true
    || Number.isInteger(lastInt) !== true
    || typeof firstInt !== 'number'
    || typeof lastInt !== 'number' ) {
    sum = 'ERROR';
  } else if (firstInt > lastInt) {
    for (i = lastInt; i <= firstInt; i++) {
      sum += i;
    }
  } else {
    for (i = firstInt; i <= lastInt; i++) {
      sum += i;
    }
  }
  
  return sum;
};

// Do not edit below this line
module.exports = sumAll;

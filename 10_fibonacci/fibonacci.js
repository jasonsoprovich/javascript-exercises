const fibonacci = function(index) {
  if (index < 0) return 'OOPS';

  let fibArray = [0, 1];

  for (let i = 2; i <= index; i++) {
    fibArray[i] = fibArray[i - 2] + fibArray [i - 1];
  }
  return fibArray[index];
};

// Do not edit below this line
module.exports = fibonacci;

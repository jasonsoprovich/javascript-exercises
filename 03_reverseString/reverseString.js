const reverseString = function(text) {
  const textLength = text.length;
  let textOutput = "";

  for (let i = textLength; i >= 0; i--) {
    textOutput += text.charAt(i);
  }
  return textOutput;
};

// Do not edit below this line
module.exports = reverseString;

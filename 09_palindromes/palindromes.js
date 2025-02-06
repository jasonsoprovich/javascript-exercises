const palindromes = function (string) {
  let cleanString = '';
  for (let i = 0; i < string.length; i++) {
    let char = string[i].toLowerCase();

    if ((char >= 'a' && char <= 'z') || (char >= '0' && char <= '9')) {
      cleanString += char;
    }
  }

  let reversedString = '';
  for (let i = cleanString.length - 1; i>=0; i--) {
    reversedString += cleanString[i];
  }
  return cleanString === reversedString;
};

// Do not edit below this line
module.exports = palindromes;

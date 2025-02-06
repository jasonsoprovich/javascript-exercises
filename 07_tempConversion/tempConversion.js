const convertToCelsius = function(input) {
  // convert F to C
  // °C = (°F - 32) ÷ (9 / 5)
  const fahrenheight = input;
  const celsius = ((fahrenheight - 32) / (9 / 5));
  return Math.round(celsius * 10) / 10;
};

const convertToFahrenheit = function(input) {
  // convert C to F
  // °F = °C * 9 / 5 + 32
  const celsius = input; 
  const fahrenheight = (celsius * ( 9 / 5 )) + 32;
  return Math.round(fahrenheight * 10) / 10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};

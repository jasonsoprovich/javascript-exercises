const leapYears = function(year) {
  let checkLeapYear = false;

  if (year % 100 === 0 && (year % 400) === 0) {
    checkLeapYear = true;
  } else if (year % 4 === 0 && year % 100 !== 0) {
    checkLeapYear = true;
  } else {
    checkLeapYear = false;
  }
  
  return checkLeapYear;
};

// Do not edit below this line
module.exports = leapYears;

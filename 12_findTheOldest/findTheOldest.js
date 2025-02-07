const findTheOldest = function(arr) {

  const findAge = (person) => {
    const death = person.yearOfDeath || new Date().getFullYear();
    return death - person.yearOfBirth;
  };
  
  const sorted = arr.slice().sort((a, b) => findAge(b) - findAge(a));
  
  return sorted[0];
};

// Do not edit below this line
module.exports = findTheOldest;

const findTheOldest = function(arr) {
  
  return arr.reduce((oldest, next) => {
    const oldAge = age(oldest.yearOfBirth, oldest.yearOfDeath)
    const nextAge = age(next.yearOfBirth, next.yearOfDeath)
    return oldAge < nextAge ? next : oldest;
  })
};

const currentYear = new Date().getFullYear();

const age = function(born, dead) {
  if(!dead) {
    dead = currentYear;
  }
  return dead - born;
}

// Do not edit below this line
module.exports = findTheOldest;

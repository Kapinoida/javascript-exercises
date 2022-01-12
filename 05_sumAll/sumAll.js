const sumAll = function(...args) {
  for (let i = 0; i < args.length; i++) {
    if (args[i] < 0 || typeof args[i] != 'number') {
      return 'ERROR'
    }
  }

  let total = 0
  const first = args[0]
  const sec = args[1]
  
  if (first > sec) {
    for (let i = sec; i < first + 1; i++) {
      total += i
    }
  } else {
    for (let i = first; i < sec + 1; i++) {
      total += i
    }
  }
  return total
};

// Do not edit below this line
module.exports = sumAll;

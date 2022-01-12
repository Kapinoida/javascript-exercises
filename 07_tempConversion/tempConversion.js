const ftoc = function(temp) {
  let conv = (temp - 32) * (5 / 9)
  return parseFloat(conv.toFixed(1))
};

const ctof = function(temp) {
  let conv = (temp * (9 / 5)) + 32
  return parseFloat(conv.toFixed(1))
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};

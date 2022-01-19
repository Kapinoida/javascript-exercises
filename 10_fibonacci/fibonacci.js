const fibonacci = function(num) {
  if(num < 0) return 'OOPS';
  let a = 0;
  let b = 1;
  for (let i = 1; i < num; i++) {
    let holder = b;
    b = a + b;
    a = holder;
  }
  return b;
};

// Do not edit below this line
module.exports = fibonacci;

const palindromes = function (string) {
  let stripped = string.split('').filter(x => x.match(/[a-z]|[0-9]/gi)).join('').toLowerCase();
  let reverse = stripped.split('').reverse('').join('');
  return stripped == reverse;
};

// Do not edit below this line
module.exports = palindromes;

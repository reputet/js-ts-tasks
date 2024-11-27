/**
 * Write a function which returns a function that returns array of prime numbers between two specified numbers (included)
 * @param {number} highestNumber - a highest possible number
 * @returns {function}
 */

function isPrime(number) {
  if (number <= 1) {
    return false;
  }
  for (let i = 2; i <= number / 2; i++) {
    if (number % i === 0) {
      return false;
    }
  }
  return true;
}

module.exports.primeNumbers = function primeNumbers(highestNumber) {
  function inside(start, end) {
    const range = [];
    for (let number = start; number <= end; number++) {
      range.push(number);
    }
    return range.filter(isPrime);
  }
  return inside;
};


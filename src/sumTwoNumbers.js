/**
 * Find a sum of two numbers
 * @param {number|string} firstNumber
 * @param {number|string} secondNumber
 * @returns {number}
 */
module.exports.sumTwoNumbers = function sumTwoNumbers(firstNumber, secondNumber) {
  const validatedFirst = Number(String(firstNumber).replaceAll(" ", ""));
  const validatedSecond = Number(String(secondNumber).replaceAll(" ", ""));
  return validatedFirst + validatedSecond;
};

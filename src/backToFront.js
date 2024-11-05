/**
 * Copy and paste defined amount of a string's symbols to the front and back of a string
 * @param {string} str
 * @param {number} symbolsCount
 * @returns {string}
 */
module.exports.backToFront = function backToFront(str, symbolsCount) {
  if (symbolsCount > str.length) {
    return str;
  }
  const symbols = str.slice(str.length - symbolsCount);
  let result = `${symbols}${str}${symbols}`;
  return result;
};

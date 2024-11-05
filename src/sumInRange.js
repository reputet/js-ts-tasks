/**
 * Find a sum in a range of consecutive numbers
 * @param {number|string} start
 * @param {number|string} end
 * @returns {number}
 */
module.exports.sumInRange = function sumInRange(start, end) {
  const validatedStart = Number(start);
  const validatedEnd = Number(end);
  const lowNumber = Math.min(validatedStart, validatedEnd);
  const bigNumber = Math.max(validatedStart, validatedEnd);
  let result = 0;
  for (let i = lowNumber; i <= bigNumber; i++) {
    result += i;
  }
  return result;
};

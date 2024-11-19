/**
 * Write a script that finds the maximal sequence of equal elements in an array. If there are more than one, return the first.
 * @param {Object} arr
 * @returns {Object}
 */
module.exports.getMaximalSequence = function getMaximalSequence(arr) {
  const newArr = [];
  let splitPoint = 0;
  for (let i = 1; i <= arr.length; i++) {
    if (arr[i] !== arr[i - 1]) {
      newArr.push(arr.slice(splitPoint, i));
      splitPoint = i;
    }
  }

  let result = [];
  for (let i = 0; i < newArr.length; i++) {
    if (newArr[i].length > result.length) {
      result = newArr[i];
    }
  }

  return result;
};

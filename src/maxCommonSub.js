/**
 * Write a function which finds a maximal common substring of two given strings
 * example
 * str1 = 'xavgabcdefmokd'
 * str2 = 'hkotogabcdefl'
 * answer: 'gabcdef' - a common substring for both strings
 * @param {string} str1
 * @param {string} str2
 * @returns {number}
 */
module.exports.maxCommonSub = function maxCommonSub(str1, str2) {
  const substrings = new Set();
  for (let i = 0; i < str1.length; i++) {
    for (let j = 0; j < str2.length; j++) {
        let current = 0;
        while ((i + current) < str1.length && (j + current) < str2.length && str1[i + current] === str2[j + current]) {
          current++;
        }
        substrings.add(str1.slice(i, i + current));
    }
  }
  const substringsList = [...substrings];
  return substringsList.reduce((a, b) => a.length > b.length ? a : b, "");
};

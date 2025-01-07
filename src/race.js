/* eslint-disable no-restricted-syntax */
/**
 * Write a function that will work similar to standard Promise.race
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.race = function race(promisesArray) {
  return new Promise((resolve, reject) => {
    for (const promise of promisesArray) {
      promise.then(
        result => resolve(result),
        error => reject(error)
      )
    }
  })
};

/* eslint-disable no-plusplus */
/* eslint-disable no-loop-func */
/**
 * Write a function that will work similar to standard Promise.all
 * @param {Array<Promise>} promisesArray
 * @returns Promise
 */
module.exports.all = function all(promisesArray) {
  return new Promise((resolve, reject) => {
    const arr = new Array(promisesArray.length);
    let counter = 0;
    for (let i = 0; i < promisesArray.length; i++) {
      promisesArray[i].then(
        result => {
          arr[i] = result;
          counter++;
          if (promisesArray.length === counter) {
            resolve(arr);
          }
        },
        error => reject(error)
      )
    }
  })
};

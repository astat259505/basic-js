const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
 function deleteDigit(n) {
  let arr = String(n).split('')
  let arr2 = []
  for (i = 0; i < arr.length; i++) {
   arr2.push(arr.slice(0, i) + arr.slice((i + 1), arr.length))
             
}
  let arr3 = arr2.map(item => item.split(',').join('')).sort((a, b) => (a - b))
  return Number(arr3[arr3.length - 1])
}

module.exports = {
  deleteDigit
};

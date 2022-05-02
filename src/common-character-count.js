const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
 function getCommonCharacterCount(s1, s2) {
  let s1Obj = {}
  let s2Obj = {}
   s1 = s1.split('')
    s1.forEach(item => {
      s1Obj[item] = s1Obj[item] + 1 || 1
    })
    
   
  
  s2 = s2.split('')
  s2.forEach(item => {
    s2Obj[item] = s2Obj[item] + 1 || 1
  })
  
  s2 = Object.entries(s2Obj)
  s1 = Object.entries(s1Obj)
    let result = []
  
    for (j = 0; j < s1.length; j++) {
    for (i = 0; i < s2.length; i++) {
      if (s1[j][0] == s2[i][0])  {
        result.push([s1[j][1], s2[i][1]])
      }
    }
    }
  
    let counter = []
    let resultNum = 0
    for (i = 0; i < result.length; i++) {
      result[i].sort((a, b) => b - a)
      counter.push(result[i][0] - (result[i][0]) - result[i][1])
    }
  
    counter.forEach(item => {
      resultNum += item
    })
    return Math.abs(resultNum)
    
  }
  

module.exports = {
  getCommonCharacterCount
};

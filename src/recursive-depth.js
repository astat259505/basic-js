const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

 class DepthCalculator { 

  calculateDepth(arr) {
    let counter = 1
    let secondCounter = 0
    for (let i = 0; i < arr.length; i++) {
      if (Array.isArray(arr[i])) {
        secondCounter++ 
      }
      
      }

     if (secondCounter == 0) {
       return counter
     } if (secondCounter > 0) {
       
       arr = arr.flat()
       counter += this.calculateDepth(arr)
       
     }
              
        return counter
    }
    
  }


module.exports = {
  DepthCalculator
};

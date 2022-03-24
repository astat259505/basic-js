const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
 function transform(arr) {
  if (!Array.isArray(arr)) {
    throw Error("'arr' parameter must be an instance of the Array!")
  }
 let result = arr.map((item, index, array) => {
   if (array[index - 1] == '--discard-next') {
        if (array[index] && typeof array[index] == 'number') {
        return ''
      } else {
          return item
      }
     
   } if (array[index + 1] == '--discard-prev') {
         if (array[index] && typeof array[index] == 'number') {
        return ''
      } else {
           return item
      }
   }
   if (item == '--double-prev') {
     
      if (array[index - 1] && typeof array[index - 1] == 'number' && array[index - 2] != '--discard-next') {
        return array[index - 1]
        
      } else {
        return item
      }
   }  
   if (item == '--double-next') {
      if (array[index + 1] && typeof array[index + 1] == 'number') {
        return array[index + 1]
      } else {
        return item
      }
      
   } 
    
     
    else {
   return item
   }
   
   
 })
  
  return result.filter(item => item != '' && item != '--discard-prev' && item != '--discard-next' && item != '--double-prev' && item != '--double-next')
}



module.exports = {
  transform
};

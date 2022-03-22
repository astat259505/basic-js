const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
 function repeater(str, options) {
  let addStr = ''
    console.log(String(options.addition))
   
    if (options.addition){
      addStr = `${String(options.addition)}${options.additionSeparator || '|'}`;
      console.log(addStr)
    } if (!options.addition && (typeof options.addition == 'boolean' || typeof options.addition == 'object' )) {
      addStr = `${String(options.addition)}${options.additionSeparator || '|'}`
    } 
    
  console.log(addStr)
    
  let fullAddStr = ''
  let additionRepeatTimes = options.additionRepeatTimes || 1
    
  for (let i = 0; i < additionRepeatTimes; i++) {
    fullAddStr = `${fullAddStr}${addStr}`
    
  }
    
    let resultAddStr
    if (options.additionSeparator) {
   resultAddStr = fullAddStr.slice(0, fullAddStr.length - options.additionSeparator.length)
    } if (!options.additionSeparator) {
    resultAddStr = fullAddStr.slice(0, fullAddStr.length - 1)
    }
    let mainStr
    if (resultAddStr) {
    mainStr = `${String(str)}${resultAddStr}${options.separator || '+'}`
    } else {
      mainStr = `${String(str)}${options.separator || '+'}`
    }
    let fullMainStr = ''
  
    
    
    for (let j = 0; j < (options.repeatTimes || 1); j++) {
      fullMainStr = `${fullMainStr}${mainStr}`
    }
    
    
    if (options.separator) {
    return fullMainStr.slice(0, fullMainStr.length - options.separator.length)
  }  else {
    return fullMainStr.slice(0, fullMainStr.length - 1)
  }
  }
  
    
  
    
  
  
    
  
module.exports = {
  repeater
};

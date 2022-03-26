const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
 function dateSample(sampleActivity) {
  
  if(typeof sampleActivity == 'string' && typeof Number(sampleActivity) == 'number' && !isNaN(Number(sampleActivity)) && Number(sampleActivity) != 0 && Number(sampleActivity) > 0 && Number(sampleActivity) <= 15) {
let result = Math.log(MODERN_ACTIVITY / sampleActivity) / (Math.LN2 / HALF_LIFE_PERIOD)
  return Math.ceil(result)
} else {
    return false
}
}

module.exports = {
  dateSample
};

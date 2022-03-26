const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
 class VigenereCipheringMachine {
  encrypt(message, key) {
   let arr = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ'.split('')
   message = message.toUpperCase().split('')
   key = key.toUpperCase().split('')
    let result = []
    
    let count = 0
    for (let k = 0; k < message.length; k++) {
      if (message[k].charCodeAt() >= 65 && message[k].charCodeAt() <= 90)
        count++
    }
    console.log(count)
    let arr2 = []
  
      for (let j = 0; j < count;j++) {
        if (j <= 7) {
      
          arr2.push(arr.slice(arr.indexOf(key[j]), arr.length).concat(arr.slice(0, (arr.indexOf(key[j])))))
       
        } if (j >= 8) {
        arr2.push(arr.slice(arr.indexOf(key[j - 8]), arr.length).concat(arr.slice(0, (arr.indexOf(key[j - 8])))))
         
        }
      }
   let counter = 0
    for (let i = 0; i < message.length; i++) {
      if (message[i].charCodeAt() >= 65 && message[i].charCodeAt() <= 90) {
        
        result[i] = arr2[counter][arr.indexOf(message[i])]
        counter ++
      } else {
        result[i] = message[i]
      }
    }
 return result.join('')
  }
    
                               
  
  
  decrypt() {
  
  }
}

module.exports = {
  VigenereCipheringMachine
};

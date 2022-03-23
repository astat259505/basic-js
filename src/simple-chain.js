const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
 const chainMaker = {
  result: '',
  counter: 0,
  getLength() {
  return this.counter
  },
  addLink(value) {
   this.result = `${this.result}( ${value} )~~`
   this.counter++
   return this
    
  },
  removeLink(position) {
  let arr = this.result.split('~~')
  this.result = arr.filter((item, index) => index + 1 != position).join('~~')
  return this
  },
  reverseChain() {
  console.log(this.result)
  let arr = this.result.split('~~').reverse().filter((item, index) => index != 0)
                       .map(item => `${item}~~`)
  this.result = arr.join('')
  return this
  },
  finishChain() {
  let str = this.result.slice(0, this.result.length - 2)
  
  this.result = ''
  this.counter = 0
  return str
  },
  
};

module.exports = {
  chainMaker
};
const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 * 
 */
const chainMaker = {
  getLength() {
    return this.chain ? this.chain.length : 0;
  },
  addLink(value) {
    if (!this.chain) {
      this.chain = [];
    }
    this.chain.push(`( ${value} )`);
    return this;
  },
  removeLink(position) {
    if (!Number.isInteger(position) ||
        position < 1 ||
        position > this.getLength()) {
          
      this.chain.length = 0;
      throw new Error('You can\'t remove incorrect link!');
    }
    this.chain.splice(position - 1, 1);
    return this;
  },
  reverseChain() {
    this.chain.reverse();
    return this;
  },
  finishChain() {
    const result = this.chain.join('~~');
    this.chain.length = 0;
    return result;
  }
};

module.exports = {
  chainMaker
};

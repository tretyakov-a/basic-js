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
  constructor(direct = true) {
    this.direct = direct;
    this.encryptionTable = this._createEncryptionTable();
    this.decryptionHash = this._createDecryptionHash();
  }
  
  _createEncryptionTable() {
    const start = 'A'.charCodeAt(0);
    const end = 'Z'.charCodeAt(0);
    const letters = [];
    const table = {};
    for (let i = start; i <= end; i += 1) {
      letters.push(String.fromCharCode(i));
    }
    let startIndex = 0;
    letters.forEach(x => {
      table[x] = {};
      letters.forEach((y, index) => {
        table[x][y] = letters[(index + startIndex) % letters.length];
      })
      startIndex += 1;
    });
    return table;
  }
  
  _createDecryptionHash() {
    const decryptionHash = {}
    Object.keys(this.encryptionTable).forEach(x => {
      Object.keys(this.encryptionTable[x]).forEach(y => {
        decryptionHash[y + this.encryptionTable[x][y]] = x;
      });
    });
    return decryptionHash;
  }

  _encryptLetter(key, letter) {
    return this.encryptionTable[letter][key];
  }

  _decryptLetter(key, encrypt) {
    return this.decryptionHash[key + encrypt];
  }

  _process(message, key, fn) {
    if (message == undefined || key === undefined) {
      throw new Error('Incorrect arguments!');
    }
    const keyUpperCase = key.toUpperCase();
    let messageArr = message.toUpperCase().split('');
    let realIndex = 0;
    const result = messageArr
      .map(letter => {
        if (!this.encryptionTable[letter]) {
          return letter;
        }
        const keyLetter = keyUpperCase[realIndex % key.length];
        realIndex += 1;
        return fn.call(this, keyLetter, letter);
      });

    if (!this.direct) {
      result.reverse();
    }
    return result.join('');
  }

  encrypt(message, key) {
    return this._process(message, key, this._encryptLetter);
  }

  decrypt(encryptedMessage, key) {
    return this._process(encryptedMessage, key, this._decryptLetter);
  }
}

module.exports = {
  VigenereCipheringMachine
};

const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given an array with heights, sort them except if the value is -1.
 *
 * @param {Array} arr
 * @return {Array}
 *
 * @example
 * arr = [-1, 150, 190, 170, -1, -1, 160, 180]
 *
 * The result should be [-1, 150, 160, 170, -1, -1, 180, 190]
 */
function sortByHeight(arr) {
  const sorted = arr
    .filter(el => el !== -1)
    .sort((a, b) => a - b);
  let sortedIndex = 0;
  return arr
    .map(value => {
      let newValue = value;
      if (value !== - 1) {
        newValue = sorted[sortedIndex];
        sortedIndex += 1;
      }
      return newValue;
    });
}

module.exports = {
  sortByHeight
};

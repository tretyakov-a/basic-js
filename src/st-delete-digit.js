import { NotImplementedError } from '../extensions/index.js';

/**
 * Given some integer, find the maximal number you can obtain
 * by deleting exactly one digit of the given number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For n = 152, the output should be 52
 *
 */
export default function deleteDigit(n) {
  const nArr = String(n).split('');
  const numbers = [];
  for (let i = 0; i < nArr.length; i += 1) {
    const number = +nArr.slice(0, i).concat(nArr.slice(i + 1)).join('');
    numbers.push(number);
  }
  return Math.max(...numbers);
}

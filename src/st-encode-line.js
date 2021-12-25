import { NotImplementedError } from '../extensions/index.js';

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
export default function encodeLine(str) {
  let result = '';
  let subString = '';
  for (let i = 0; i < str.length; i += 1) {
    subString += str[i];
    if (str[i + 1] !== str[i] || i + 1 === str.length) {
      const n = subString.length > 1 ? subString.length : '';
      result += `${n}${subString[0]}`;
      subString = '';
    }
  }
  return result;
}

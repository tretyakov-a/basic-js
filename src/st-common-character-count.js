import { NotImplementedError } from '../extensions/index.js';

/**
 * Given two strings, find the number of common characters between them.
 *
 * @param {String} s1
 * @param {String} s2
 * @return {Number}
 *
 * @example
 * For s1 = "aabcc" and s2 = "adcaa", the output should be 3
 * Strings have 3 common characters - 2 "a"s and 1 "c".
 */
export default function getCommonCharacterCount(s1, s2) {
  const s2Arr = s2.split('');
  let counter = 0;
  for (let i = 0; i < s1.length; i += 1) {
    const index = s2Arr.indexOf(s1[i]);
    if (index !== -1) {
      delete s2Arr[index];
      counter += 1;
    }
  }
  return counter;
}

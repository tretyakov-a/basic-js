import { NotImplementedError } from '../extensions/index.js';

/**
 * Create transformed array based on the control sequences that original
 * array contains
 * 
 * @param {Array} arr initial array
 * @returns {Array} transformed array
 * 
 * @example
 * 
 * transform([1, 2, 3, '--double-next', 4, 5]) => [1, 2, 3, 4, 4, 5]
 * transform([1, 2, 3, '--discard-prev', 4, 5]) => [1, 2, 4, 5]
 * 
 */
export default function transform(arr) {
  if (!Array.isArray(arr)) {
    throw new Error("'arr' parameter must be an instance of the Array!")
  }
  const clone = [...arr];
  const result = [];
  for (let i = 0; i < clone.length; i += 1) {
    
    switch (clone[i]) {
      case '--discard-next':
        i += 1;
        if (clone[i]) {
          delete clone[i];
        }
        break;
      case '--discard-prev':
        if (clone[i - 1]) {
          result.pop();
        }
        break;
      case '--double-next':
        i += 1;
        if (clone[i]) {
          result.push(clone[i], clone[i]);
        }
        break;
      case '--double-prev':
        const prev = clone[i - 1];
        if (prev) {
          if (!(result[result.length - 1] === prev)) {
            result.push(prev);
          }
          result.push(prev);
        }
        break;
      default:
        result.push(clone[i]);
        break;
    }
  }
  return result;
}
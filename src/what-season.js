import { NotImplementedError } from '../extensions/index.js';

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
export default function getSeason(date) {
  if (date === undefined) {
    return 'Unable to determine the time of year!';
  }
  if (!(date instanceof Date)) {
    throw new Error('Invalid date!');
  }
  try {
    date.valueOf();
  } catch (error) {
    throw new Error('Invalid date!');
  }
  const seasons = ['winter', 'spring', 'summer', 'autumn'];
  const month = date.getMonth();
  const seasonIndex = month === 11 ? 0 : Math.trunc((month % 11 + 1) / 3);
  return seasons[seasonIndex];
}

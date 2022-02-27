const { NotImplementedError } = require('../extensions/index.js');

/**
 * In the popular Minesweeper game you have a board with some mines and those cells
 * that don't contain a mine have a number in it that indicates the total number of mines
 * in the neighboring cells. Starting off with some arrangement of mines
 * we want to create a Minesweeper game setup.
 *
 * @param {Array<Array>} matrix
 * @return {Array<Array>}
 *
 * @example
 * matrix = [
 *  [true, false, false],
 *  [false, true, false],
 *  [false, false, false]
 * ]
 *
 * The result should be following:
 * [
 *  [1, 2, 1],
 *  [2, 1, 1],
 *  [1, 1, 1]
 * ]
 */
function minesweeper (matrix) {
  const result = [];
  
  const checkCell = (i, j) => (
    matrix[i] !== undefined
    && matrix[i][j] !== undefined
    && matrix[i][j]
  );

  const countNeighboringMines = (i, j) => {
    const checks = [[-1, -1], [-1, 0], [-1, 1], [0, -1], [0, 1], [1, -1], [1, 0], [1, 1]];
    return checks.reduce((counter, [dx, dy]) => counter += checkCell(i + dx, j + dy), 0);
  }

  for (let i = 0; i < matrix.length; i += 1) {
    result.push(new Array(matrix[i].length));
    for (let j = 0; j < matrix[i].length; j += 1) {
      result[i][j] = countNeighboringMines(i, j);
    }
  }
  return result;
}

module.exports = {
  minesweeper
};

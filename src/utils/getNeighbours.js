/**
 * This function returns the 8 neighbours of one 'cell' within a 2D array (a matrix)
 * Border cells wrap around.
 *
 * Arguments:
 * - 'cell': Array with pair of ints, the coordinates of the cell. i.e. [1, 2]
 * - 'board': The 2D array or matrix, an array of arrays. For example:
 *    myArr = [
 *     [1, 2, 3],
 *     [4, 5, 6],
 *     [7, 8, 9],
 *    ];
 */

function getNeighbours(cell, board) {
  const [x, y] = cell;
  const rows = board.length;
  const cols = board[0].length;

  /**
   * This statement creates an array of vectors representing
   * the coordinates of the 8 neighbours (with wrapping)
   */

  const neighbours = [
    [x - 1 >= 0 ? x - 1 : rows - 1, y - 1 >= 0 ? y - 1 : cols - 1],
    [x - 1 >= 0 ? x - 1 : rows - 1, y],
    [x - 1 >= 0 ? x - 1 : rows - 1, y + 1 < cols ? y + 1 : 0],
    [x, y - 1 >= 0 ? y - 1 : cols - 1],
    [x, y + 1 < cols ? y + 1 : 0],
    [x + 1 < rows ? x + 1 : 0, y - 1 >= 0 ? y - 1 : cols - 1],
    [x + 1 < rows ? x + 1 : 0, y],
    [x + 1 < rows ? x + 1 : 0, y + 1 < cols ? y + 1 : 0],
  ];

  return neighbours.map(([x, y]) => board[x][y]);
}

export default getNeighbours;

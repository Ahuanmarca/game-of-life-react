/**
 * This function returns a 2D array filled with values
 * randomized to one of two states: true or false
 * Acceps number or rows, number of cols and chance (from 0 to 1)
 */

function randomizeCells(rows = 8, cols = 5, chance = 0.3) {
  const board = Array(rows).fill(Array(cols).fill(false));
  const randomizedBoard = board.map((row) => {
    return row.map(() => {
      return Math.random() < chance ? true : false;
    })
  })
  return randomizedBoard;
}

// console.log(randomizeCells())

export default randomizeCells;

import getNeighbours from "./getNeighbours.js";

/**
 * Neighbours < 2 || Neighbours > 3 => Live cell dies
 * Neighbourd === 3 => Dead cell becomes alive
 * Source: https://en.wikipedia.org/wiki/Conway%27s_Game_of_Life
 */

function getNextGeneration(board) {
  const rows = board.length;
  const cols = board[0].length;
  const newBoard = board.map((row) => row.map((col) => col));

  for (let i = 0; i < rows; i++) {
    for (let j = 0; j < cols; j++) {
      const neighbours = getNeighbours([i, j], board).filter((n) => n).length;
      if (neighbours < 2 || neighbours > 3) newBoard[i][j] = false;
      if (neighbours === 3) newBoard[i][j] = true;
    }
  }

  return newBoard;
}

export default getNextGeneration;

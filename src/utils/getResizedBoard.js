function getResizedBoard(cellsData, rows, cols) {
  const resizedBoard = cellsData.map((row) => row.map((col) => col));

  if (rows > cellsData.length)
    resizedBoard.push(
      Array(cols)
        .fill(false)
        .map(() => (Math.random() < 0.3 ? true : false))
    );

  if (rows < cellsData.length) resizedBoard.pop();

  if (cols > cellsData[0].length)
    resizedBoard.forEach((row) => row.push(Math.random() < 0.3 ? true : false));

  if (cols < cellsData[0].length) resizedBoard.forEach((row) => row.pop());

  return resizedBoard;
}

export default getResizedBoard;

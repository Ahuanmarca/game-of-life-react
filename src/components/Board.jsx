import Cell from "./Cell";

function Board({
  cellsData = [
    [true, false],
    [false, true],
  ],
}) {

  return (
    <div className="life-board">
      {cellsData.map((row, i) => (
        <div className="life-row" key={i} style={{ display: "flex" }}>
          {row.map((cell, i) => (
            <Cell className="life-cell" key={i} alive={cell} />
          ))}
        </div>
      ))}
    </div>
  );
}

export default Board;

/* eslint-disable react-hooks/exhaustive-deps */
import Board from "../components/Board";
import { useState, useEffect } from "react";
import randomizeCells from "../utils/randomizeCells.js";
import getNextGeneration from "../utils/getNextGeneration.js";
import getResizedBoard from "../utils/getResizedBoard.js";

function Game() {
  const [rows, setRows] = useState(20);
  const [cols, setCols] = useState(25);
  const [paused, setPaused] = useState(false);
  const [cellsData, setCellsData] = useState(() => randomizeCells(rows, cols));

  // MAIN ACTION: Update board with each generation,
  // following Conway's Game of Life rules
  useEffect(() => {
    const interval = setInterval(() => {
      const newGeneration = getNextGeneration(cellsData);
      ! paused && setCellsData(() => newGeneration);
    }, 1000);
    return () => clearInterval(interval);
  }, [cellsData, paused]);

  function handleKeyPress(e) {
    const key = e.code;
    switch (key) {
      case "ArrowUp":
        setRows(() => (rows + 1 <= 50 ? rows + 1 : 50));
        break;
      case "ArrowDown":
        setRows(() => (rows - 1 >= 3 ? rows - 1 : 3));
        break;
      case "ArrowRight":
        setCols(() => (cols + 1 <= 50 ? cols + 1 : 50));
        break;
      case "ArrowLeft":
        setCols(() => (cols - 1 >= 3 ? cols - 1 : 3));
        break;
      case "Space":
        setPaused(() => !paused);
        break;
    }
  }

  // Resize board with Up, Down, Left and Right arrows
  // TODO (?): Implement this without direct DOM manipulation
  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [cellsData]);

  useEffect(() => {
    document.addEventListener("keydown", handleKeyPress);
    return () => {
      document.removeEventListener("keydown", handleKeyPress);
    };
  }, [paused]);

  // Define board state when changing size
  // - When growing, new cells state is randomized
  // - When shrinking, removed cells just dissappear 👻
  useEffect(() => {
    const resizedBoard = getResizedBoard(cellsData, rows, cols);
    setCellsData(() => resizedBoard);
  }, [rows, cols]);

  useEffect(() => {
    console.log({
      rows, cols, paused
    })
  })

  return (
    <>
      <div className="card">
        <Board cellsData={cellsData} />
      </div>
      <br />
      <p className="text-body-secondary">{`↑↓ ${rows} →←${cols}`}</p>
    </>
  );
}

export default Game;

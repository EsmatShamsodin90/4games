// src/pages/Game1.jsx
import React, { useState } from "react";

export default function TicTacToe() {
  const [board, setBoard] = useState(Array(9).fill(null));
  const [isXNext, setIsXNext] = useState(true);

  const handleClick = (index) => {
    if (board[index]) return;
    const newBoard = [...board];
    newBoard[index] = isXNext ? "X" : "O";
    setBoard(newBoard);
    setIsXNext(!isXNext);
  };

  const renderSquare = (index) => (
    <button onClick={() => handleClick(index)}>{board[index]}</button>
  );

  return (
    <div>
      <h1>Tic-Tac-Toe</h1>
      <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 50px)" }}>
        {board.map((_, idx) => renderSquare(idx))}
      </div>
    </div>
  );
}

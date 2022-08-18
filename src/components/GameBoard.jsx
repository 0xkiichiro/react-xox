import { useState } from "react";
import boardStyle from "../scss/modules/gameBoard.module.scss";
import BoardPiece from "./BoardPiece";

const GameBoard = () => {
  const [boardArr, setBoardArr] = useState([
    { id: 0, content: "" },
    { id: 1, content: "" },
    { id: 2, content: "" },
    { id: 3, content: "" },
    { id: 4, content: "" },
    { id: 5, content: "" },
    { id: 6, content: "" },
    { id: 7, content: "" },
    { id: 8, content: "" },
  ]);

  const winConditions = [
    [0, 1, 2],
    [3, 4, 5],
    [6, 7, 8],
    [0, 3, 6],
    [1, 4, 7],
    [2, 6, 8],
    [0, 4, 8],
  ];

  const handleClick = (e) => {
    console.log(boardArr);
    // players turn
    setBoardArr(
      boardArr.map((item) =>
        item.id == e.target.id && item.content == ""
          ? { ...item, content: "X" }
          : item
      )
    );
    //computers turn

    console.log(e.target.id);
  };

  return (
    <div className={boardStyle["game-board"]}>
      {boardArr.map((sq, index) => (
        <BoardPiece
          key={index}
          id={index}
          handleClick={handleClick}
          boardArr={boardArr}
          setBoardArr={setBoardArr}
        />
      ))}
    </div>
  );
};

export default GameBoard;

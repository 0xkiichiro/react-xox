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

  const handleClick = (e) => {
    console.log(boardArr);
    boardArr.map(
      (item) =>
        item.id == e.target.id &&
        setBoardArr([
          { id: item.id, content: "X" },
          ...boardArr.filter((item) => item.id != e.target.id),
        ])
    );
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

import { useEffect, useState } from "react";
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
  const playerArr = [];
  const computerArr = [];

  const playerPlay = (e) => {
    setBoardArr(
      boardArr.map((item) =>
        item.id == e.target.id && item.content == ""
          ? { ...item, content: "X" }
          : item
      )
    );
    console.log(boardArr);
  };

  const computerPlay = (e) => {
    //* this will be called back if e.target.id == computer guess
    let computerGuess = Math.floor(Math.random() * 9);
    console.log(computerGuess);
    if (e.target.value == computerGuess) {
      computerPlay(e);
    } else {
      setBoardArr(
        boardArr.map((item) =>
          item.content == "" && item.id == computerGuess
            ? { ...item, content: "O" }
            : item
        )
      );
      console.log(boardArr);
    }
  };

  const handleClick = (e) => {
    // players turn
    playerPlay(e);
    //computers turn
    computerPlay(e);

    console.log(e.target.id);
  };

  //* calculating players and computers scores after each change on boardArr
  useEffect(() => {
    boardArr.filter((item) => {
      if (item.content == "X") {
        playerArr.push(item);
      } else if (item.content == "O") {
        computerArr.push(item);
      }
    });
    console.log("playerArr: ", playerArr);
    console.log("computerArr: ", computerArr);
    // calculateWin();
  }, [boardArr]);

  // const calculateWin = () => {
  //   if (winConditions.map((item) => item.map((id) => console.log(id)))) {
  //     // alert("Player wins!");
  //   } else if (computerArr.includes()) {
  //   } else if (null) {
  //     // add turn counter or a way to know it is done
  //   }
  // };

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

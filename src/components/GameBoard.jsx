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

  const playerArr = [];
  const computerArr = [];

  const [win, setWin] = useState(false);

  const playerPlay = (e, boardArr) => {
    setBoardArr((boardArr) =>
      boardArr.map((item) =>
        item.id == e.target.id && item.content == ""
          ? { ...item, content: "X" }
          : item
      )
    );
    console.log("player plays");
  };

  const computerPlay = (e, boardArr) => {
    //* this fx will call itself until it picks a random number & checks item.id == computerGuess with content = "" in boardArr
    let computerGuess = Math.floor(Math.random() * 9);
    if (
      e.target.id == computerGuess ||
      playerArr.includes(computerGuess) ||
      computerArr.includes(computerGuess)
    ) {
      console.log("guessing again");
      computerPlay(e, boardArr);
    } else {
      setBoardArr((boardArr) =>
        boardArr.map((item) =>
          item.content == "" && item.id == computerGuess
            ? { ...item, content: "O" }
            : item
        )
      );
      console.log("computer plays" + computerGuess);
    }
  };

  const handleClick = (e) => {
    //* check if we clicked an empty box
    if (!e.target.innerHTML) {
      // players turn
      playerPlay(e);
      //computers turn

      if (playerArr.length + computerArr.length < 7) {
        computerPlay(e);
      }
    } else {
      alert("Pick an empty box!");
    }
  };

  //* calculating players and computers scores after each change on boardArr, playerArr, computerArr
  useEffect(() => {
    boardArr.filter((item) => {
      if (item.content == "X") {
        playerArr.push(item.id);
      } else if (item.content == "O") {
        computerArr.push(item.id);
      }
    });
    // console.log("playerArr: ", playerArr);
    // console.log("computerArr: ", computerArr);
    calculateWin();
    // console.log(boardArr);
  }, [boardArr, playerArr, computerArr]);

  const calculateWin = () => {
    //* not the ideal way to calculate win but works..
    if (
      (playerArr.includes(0) &&
        playerArr.includes(1) &&
        playerArr.includes(2)) ||
      (playerArr.includes(3) &&
        playerArr.includes(4) &&
        playerArr.includes(5)) ||
      (playerArr.includes(6) &&
        playerArr.includes(7) &&
        playerArr.includes(8)) ||
      (playerArr.includes(0) &&
        playerArr.includes(3) &&
        playerArr.includes(6)) ||
      (playerArr.includes(1) &&
        playerArr.includes(4) &&
        playerArr.includes(7)) ||
      (playerArr.includes(2) &&
        playerArr.includes(5) &&
        playerArr.includes(8)) ||
      (playerArr.includes(0) &&
        playerArr.includes(4) &&
        playerArr.includes(8)) ||
      (playerArr.includes(2) && playerArr.includes(4) && playerArr.includes(6))
    ) {
      setWin("Player");
    } else if (
      (computerArr.includes(0) &&
        computerArr.includes(1) &&
        computerArr.includes(2)) ||
      (computerArr.includes(3) &&
        computerArr.includes(4) &&
        computerArr.includes(5)) ||
      (computerArr.includes(6) &&
        computerArr.includes(7) &&
        computerArr.includes(8)) ||
      (computerArr.includes(0) &&
        computerArr.includes(3) &&
        computerArr.includes(6)) ||
      (computerArr.includes(1) &&
        computerArr.includes(4) &&
        computerArr.includes(7)) ||
      (computerArr.includes(2) &&
        computerArr.includes(5) &&
        computerArr.includes(8)) ||
      (computerArr.includes(0) &&
        computerArr.includes(4) &&
        computerArr.includes(8)) ||
      (computerArr.includes(2) &&
        computerArr.includes(4) &&
        computerArr.includes(6))
    ) {
      setWin("Computer");
      //* if all moves played and no winner => tie
    } else if (computerArr?.length + playerArr?.length == 9) {
      setWin("Tie");
    }
  };

  //* reset fx to play again
  const playAgain = () => {
    const playerArr = [];
    const computerArr = [];
    setWin(false);
    setBoardArr([
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
  };

  return (
    <div className={boardStyle["game-board"]}>
      {(win == "Tie" && (
        <div>
          <h1 className="heading-1">It's a tie!</h1>
          <button className="btn" onClick={playAgain}>
            Play Again
          </button>
        </div>
      )) ||
        (win && (
          <div>
            <h1 className="heading-1">{win} has won!</h1>
            <button className="btn" onClick={playAgain}>
              Play Again
            </button>
          </div>
        )) ||
        boardArr.map((sq, index) => (
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

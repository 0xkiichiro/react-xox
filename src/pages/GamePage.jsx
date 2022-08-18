import BoardPiece from "../components/BoardPiece";
import GameBoard from "../components/GameBoard";

const GamePage = () => {
  const boardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="page-container">
      <GameBoard>
        {boardArr.map((sq) => (
          <BoardPiece />
        ))}
        <div>hello</div>
      </GameBoard>
    </div>
  );
};

export default GamePage;

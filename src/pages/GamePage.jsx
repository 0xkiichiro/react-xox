import BoardPiece from "../components/BoardPiece";
import GameBoard from "../components/GameBoard";

const GamePage = () => {
  const boardArr = [1, 2, 3, 4, 5, 6, 7, 8, 9];
  return (
    <div className="game-page-container">
      <GameBoard />
    </div>
  );
};

export default GamePage;

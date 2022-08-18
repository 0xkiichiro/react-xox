import { useNavigate } from "react-router-dom";

const WelcomePage = () => {
  const navigate = useNavigate();
  return (
    <div className="page-container">
      <h1 className="heading-1">Welcome to the 0xkiichiro's XOX Game</h1>
      <h2 className="heading-2">Rules</h2>
      <ul className="p">
        <li>The game is played on a grid that's 3 squares by 3 squares.</li>
        <li>
          You are X, your friend (or the computer in this case) is O. Players
          take turns putting their marks in empty squares.
        </li>
        <li>
          The first player to get 3 of her marks in a row (up, down, across, or
          diagonally) is the winner.
        </li>
        <li>
          When all 9 squares are full, the game is over. If no player has 3
          marks in a row, the game ends in a tie.
        </li>
      </ul>
      <button className="btn" onClick={() => navigate("/game")}>
        Start the Game!
      </button>
    </div>
  );
};

export default WelcomePage;

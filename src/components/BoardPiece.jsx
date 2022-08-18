import boardPieceStyle from "../scss/modules/boardPiece.module.scss";

const BoardPiece = ({ boardArr, setBoardArr, handleClick, id }) => {
  return (
    <div
      className={boardPieceStyle["sq"]}
      id={id}
      onClick={(e) => handleClick(e)}
    >
      {boardArr[id].content}
    </div>
  );
};

export default BoardPiece;

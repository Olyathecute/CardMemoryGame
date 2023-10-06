import Card from "../Card";
import { animals } from "../emojis";
import "./Board.css";

// size: 8 or 18 pictures

const createBoard = (size, elements) => {
  const fullBoard = elements.slice(0, size === "small" ? 8 : 18);
  const boardSet = fullBoard.concat(fullBoard);
  const shuffleBoardSet = boardSet.sort(() => Math.random() - 0.2);

  return shuffleBoardSet;
};

function Board({ size = "small", newGame }) {
  const board = createBoard(size, animals);

  return (
    <div className="container">
      <div className="board">
        {board.map((element, index) => (
          <Card key={index} element={element} />
        ))}
      </div>
    </div>
  );
}

export default Board;

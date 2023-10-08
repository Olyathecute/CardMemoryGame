import { useState } from "react";
import Board from "./Board";
import Timer from "./Timer";
import { animals, flags, fruits } from "./emojis";
import "./App.css";

const createBoard = (size, elements) => {
  const fullBoard = elements.slice(0, size === "small" ? 8 : 18);
  const boardSet = fullBoard.concat(fullBoard);
  const shuffleBoardSet = boardSet.sort(() => Math.random() - 0.2);

  return shuffleBoardSet;
};

function App() {
  const [newGame, setNewGame] = useState(false);
  const [board, setBoard] = useState([]);
  const [moves, setMoves] = useState(0);

  const startGame = () => {
    setNewGame(true);
    setBoard(createBoard("small", animals));
  };

  const stopGame = () => {
    setNewGame(false);
  };

  return (
    <>
      <header>
        <h1>Card Memory Game</h1>
      </header>
      <div className="main">
        <div className="preferences">
          <div className="btn-group">
            <button className="btn" onClick={() => startGame()}>
              Start New Game
            </button>
            <button className="btn" onClick={() => stopGame()}>
              End Game
            </button>
          </div>
          <div className="output-group">
            <Timer newGame={newGame} />
            <p>Moves: {moves}</p>
          </div>
        </div>
        <Board board={board} newGame={newGame} />
      </div>
    </>
  );
}

export default App;

// - after click user see a board where all cards turn by back-face; timer 00, moves: 00
// - user choose card (the choosen card turned on front-face)
// - user choose another card, if both card have identical picture - its stay on front-face and stay unclickable,
//   in other case - turn in back-face
// - when all card founded - timer stop, game will ends
//
//
// After:
// - choose the board size
// - choose pictures
//
//

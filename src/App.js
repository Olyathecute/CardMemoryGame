import { useState } from "react";
import Board from "./Board";
// import { animals, flags, fruits } from "./emojis";
import "./App.css";

function App() {
  const [newGame, setNewGame] = useState(false);
  const timer = 0;
  const moves = 0;

  return (
    <body>
      <header>
        <h1>Card Memory Game</h1>
      </header>
      <div className="main">
        <div className="preferences">
          <div className="btn-group">
            <button className="btn" onClick={() => setNewGame(true)}>
              Start New Game
            </button>
            <button className="btn" onClick={() => setNewGame(false)}>
              End Game
            </button>
          </div>
          <div className="output-group">
            <p>Timer: {timer}</p>
            <p>Moves: {moves}</p>
          </div>
        </div>
        <Board newGame={newGame} />
      </div>
    </body>
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

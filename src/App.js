import { useState } from "react";
import Board from "./Board";
import StartPage from "./StartPage";
import { imageTypes } from "./data";
import "./App.css";

const createBoard = ({ size, images }) => {
  const fullBoard = imageTypes[images].slice(0, size === "small" ? 8 : 18);
  const boardSet = fullBoard.concat(fullBoard);
  const shuffleBoardSet = boardSet.sort(() => Math.random() - 0.2);

  return { boardSet: shuffleBoardSet, size: size };
};

function App() {
  const [newGame, setNewGame] = useState(false);
  const [board, setBoard] = useState(null);
  const [moves, setMoves] = useState(0);
  const [preferences, setPreferences] = useState({
    size: "small",
    images: "animals",
  });

  console.log("preferences", preferences);

  const startGame = () => {
    setNewGame(true);
    setBoard(createBoard(preferences));
  };

  const stopGame = () => {
    setNewGame(false);
    setMoves(0);
  };

  return (
    <>
      <header>
        <h1>Card Memory Game</h1>
      </header>

      <div className="main">
        {newGame ? (
          <>
            <Board
              board={board}
              newGame={newGame}
              moves={moves}
              setMoves={setMoves}
            />
            <button className="btn" onClick={stopGame}>
              Close Game
            </button>
          </>
        ) : (
          <StartPage
            preferences={preferences}
            setPreferences={setPreferences}
            startGame={startGame}
          />
        )}
      </div>
    </>
  );
}

export default App;

// - конец игры при открытии всех карточек
// - дизейбл открытой карточки
// - choose the board size (4х4 или 6х6)

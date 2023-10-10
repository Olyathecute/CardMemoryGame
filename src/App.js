import { useState } from "react";
import Board from "./Board";
import Timer from "./Timer";
import { imageTypes } from "./data";
import "./App.css";
import StartPage from "./StartPage";

const createBoard = ({ size, images }) => {
  const fullBoard = imageTypes[images].slice(0, size === "small" ? 8 : 18);
  const boardSet = fullBoard.concat(fullBoard);
  const shuffleBoardSet = boardSet.sort(() => Math.random() - 0.2);

  return shuffleBoardSet;
};

function App() {
  const [newGame, setNewGame] = useState(false);
  const [board, setBoard] = useState([]);
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
  };

  return (
    <>
      <header>
        <h1>Card Memory Game</h1>
      </header>

      <div className="main">
        {newGame ? (
          <Board board={board} newGame={newGame} setMoves={setMoves} />
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
// - choose the board size (4х4 или 6х6)

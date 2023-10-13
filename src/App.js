import { useState } from 'react';
import Board from './Board';
import StartPage from './StartPage';
import { imageTypes } from './data';
import './App.css';

const startSettings = { size: 'small', images: 'animals' };

const createBoard = ({ size, images }) => {
  const setSize = size === 'small' ? 8 : 18;
  const fullBoard = imageTypes[images].slice(0, setSize);
  const boardSet = fullBoard.concat(fullBoard);
  const shuffleBoardSet = boardSet.sort(() => Math.random() - 0.5);

  return {
    boardSet: shuffleBoardSet,
    boardSize: setSize * 2,
    boardSizeName: size,
  };
};

function App() {
  const [newGame, setNewGame] = useState(false);
  const [board, setBoard] = useState(null);
  const [moves, setMoves] = useState(0);
  const [preferences, setPreferences] = useState({ ...startSettings });

  const startGame = () => {
    setNewGame(true);
    setBoard(createBoard(preferences));
  };

  const stopGame = () => {
    setNewGame(false);
    setMoves(0);
    setPreferences({ ...startSettings });
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
              stopGame={stopGame}
            />
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

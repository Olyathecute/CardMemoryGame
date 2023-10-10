import { useEffect, useState } from 'react';
import Card from '../Card';
import GameInfo from '../GameInfo';
import './Board.css';

function Board({ board, newGame, moves, setMoves, stopGame }) {
  const [match, setMatch] = useState({
    first: null,
    second: null,
    current: null,
  });
  const [disabledCards, setDisabledCards] = useState([]);
  const [turnOver, setTurnOver] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);

  useEffect(() => {
    if (board.setSize === disabledCards.length) setStopTimer(true);
  }, [disabledCards, board]);

  useEffect(() => {
    if (match.first && match.second) {
      setMoves((prev) => prev + 1);

      if (match.first === match.second) {
        setDisabledCards([...disabledCards, match.first]);
      } else {
        setTurnOver(true);
      }
      setMatch({ first: null, second: null, current: null });
    }
  }, [newGame, match, setMatch, disabledCards, setMoves]);

  return (
    <>
      <div className="container">
        <GameInfo moves={moves} newGame={newGame} stopTimer={stopTimer} />

        {board.setSize === disabledCards.length && (
          <div className="congratulation">YOU WIN!</div>
        )}

        <div className={`board ${board.sizeName}`}>
          {board.boardSet.map((element, index) => (
            <Card
              disabledCards={disabledCards}
              key={index}
              element={element}
              match={match}
              setMatch={setMatch}
              turnOver={turnOver}
              setTurnOver={setTurnOver}
              index={index}
            />
          ))}
        </div>
      </div>

      <button className="btn" onClick={stopGame}>
        Close Game
      </button>
    </>
  );
}

export default Board;

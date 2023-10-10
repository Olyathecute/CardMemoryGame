import { useEffect, useState } from "react";
import Card from "../Card";
import Timer from "../Timer";
import "./Board.css";

function Board({ board, newGame, moves, setMoves }) {
  const [match, setMatch] = useState({
    first: null,
    second: null,
  });
  const [disabledCards, setDisabledCards] = useState([]);
  const [turnOver, setTurnOver] = useState(false);
  const [stopTimer, setStopTimer] = useState(false);

  console.log("match", match);

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
      setMatch({ first: null, second: null });
    }
  }, [newGame, match, setMatch, disabledCards, setMoves]);

  return (
    <div className="container">
      <div className="parameters">
        <Timer newGame={newGame} stopTimer={stopTimer} />
        <div>Moves: {moves}</div>
      </div>
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
          />
        ))}
      </div>
    </div>
  );
}

export default Board;

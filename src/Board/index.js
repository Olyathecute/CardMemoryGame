import { useEffect, useState } from "react";
import Card from "../Card";
import "./Board.css";

// size: 8 or 18 pictures

function Board({ board, newGame, setMoves }) {
  const [match, setMatch] = useState({ first: null, second: null });
  const [disabledCards, setDisabledCards] = useState([]);
  const [turnOver, setTurnOver] = useState(false);

  useEffect(() => {
    console.log("match", match);

    if (match.first && match.second) {
      setMoves((prev) => prev + 1);

      if (match.first === match.second) {
        console.log("match");
        setDisabledCards([...disabledCards, match.first]);
      } else {
        console.log("not match");
        setTurnOver(true);
      }
      setMatch({ first: null, second: null });
    }
  }, [newGame, match, setMatch, disabledCards, setMoves]);

  return (
    <div className="container">
      <div className="board">
        {board.map((element, index) => (
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

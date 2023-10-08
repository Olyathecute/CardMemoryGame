import { useEffect, useState } from "react";
import Card from "../Card";
import "./Board.css";

// size: 8 or 18 pictures

function Board({ board, newGame }) {
  const [firstCard, setFirstCard] = useState(null);
  const [secondCard, setSecondCard] = useState(null);
  const [disabledCards, setDisabledCards] = useState([]);

  useEffect(() => {
    console.log("firstCard", firstCard);
    console.log("secondCard", secondCard);

    if (firstCard && secondCard) {
      if (firstCard === secondCard) {
        console.log("match");
        setDisabledCards([...disabledCards, firstCard]);
        setFirstCard(null);
        setSecondCard(null);
      } else {
        console.log("not match");
      }
    }
  }, [
    newGame,
    firstCard,
    setFirstCard,
    secondCard,
    setSecondCard,
    disabledCards,
  ]);

  return (
    <div className="container">
      <div className="board">
        {board.map((element, index) => (
          <Card
            disabledCards={disabledCards}
            key={index}
            element={element}
            firstCard={firstCard}
            setFirstCard={setFirstCard}
            setSecondCard={setSecondCard}
          />
        ))}
      </div>
    </div>
  );
}

export default Board;

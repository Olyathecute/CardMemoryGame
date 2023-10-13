import { useEffect, useState } from 'react';
import Card from '../Card';
import GameInfo from '../GameInfo';
import './Board.css';

const createCardsMap = (board) =>
  board.reduce((accum, current) => {
    return [...accum, { picture: current, opened: false, matched: false }];
  }, []);

function Board({ board, newGame, moves, setMoves, stopGame }) {
  const [stopTimer, setStopTimer] = useState(false);
  const [cards, setCards] = useState(createCardsMap(board.boardSet));
  const [matchedCards, setMatchedCards] = useState(0);
  const [timeoutId, setTimeoutId] = useState(null);

  useEffect(() => {
    const openedCards = cards.reduce((accum, { opened, matched }, index) => {
      if (opened && !matched) accum.push(index);
      return accum;
    }, []);

    if (openedCards.length === 2) {
      setMoves((prev) => prev + 1);

      if (cards[openedCards[0]].picture === cards[openedCards[1]].picture) {
        setMatchedCards((prev) => prev + 2);

        for (let index of openedCards) {
          cards[index].matched = true;
        }
        setCards([...cards]);
      } else {
        setTimeoutId(
          setTimeout(() => {
            for (let index of openedCards) {
              cards[index].opened = false;
            }
            setCards([...cards]);
            setTimeoutId(null);
          }, 700)
        );
      }
    }
  }, [cards, setMoves]);

  useEffect(() => {
    if (board.boardSize === matchedCards) setStopTimer(true);
  }, [matchedCards, board]);

  return (
    <>
      <div className="container">
        <GameInfo moves={moves} newGame={newGame} stopTimer={stopTimer} />

        {stopTimer && <div className="congratulation">YOU WIN!</div>}

        <div className={`board ${board.boardSizeName}`}>
          {board.boardSet.map((element, index) => (
            <Card
              key={index}
              element={element}
              disabled={cards[index].opened}
              showBack={cards[index].opened}
              onClick={() => {
                if (timeoutId) {
                  clearTimeout(timeoutId);

                  cards.forEach(
                    (card) =>
                      card.opened && !card.matched && (card.opened = false)
                  );
                  setTimeoutId(null);
                }

                cards[index].opened = true;
                setCards([...cards]);
              }}
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

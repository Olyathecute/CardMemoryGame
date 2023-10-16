import { useCallback, useEffect, useState } from 'react'
import Card from '../Card'
import GameInfo from '../GameInfo'
import './Board.css'

const createCardsMap = (board) => board.map((current) => ({ picture: current, opened: false, matched: false }))

function Board({ board }) {
  const [gameFinished, setGameFinished] = useState(false)
  const [moves, setMoves] = useState(0)
  const [cards, setCards] = useState(createCardsMap(board.boardSet))
  const [timeoutId, setTimeoutId] = useState(null)

  useEffect(() => {
    const openedCards = cards.filter(({ opened, matched }) => opened && !matched)

    if (openedCards.length < 2) return

    setMoves((prev) => prev + 1)

    if (openedCards[0].picture === openedCards[1].picture) {
      for (const card of openedCards) card.matched = true
      setCards([...cards])
    } else {
      const turnTimeoutId = setTimeout(() => {
        for (const card of openedCards) card.opened = false
        setCards([...cards])
        setTimeoutId(null)
      }, 700)

      setTimeoutId(turnTimeoutId)
    }
  }, [cards, setMoves])

  useEffect(() => {
    if (cards.every((card) => card.matched)) setGameFinished(true)
  }, [cards])

  const handleClick = useCallback(
    (index) => {
      if (timeoutId) {
        clearTimeout(timeoutId)
        setTimeoutId(null)
        cards.forEach((card) => card.opened && !card.matched && (card.opened = false))
      }

      cards[index].opened = true
      setCards([...cards])
    },
    [timeoutId, cards]
  )

  return (
    <div className='container'>
      <GameInfo moves={moves} gameFinished={gameFinished} />

      {gameFinished && <div className='congratulation'>You Win!</div>}

      <div className={`board ${board.boardSizeName}`}>
        {board.boardSet.map((element, index) => (
          <Card
            key={index}
            element={element}
            disabled={cards[index].opened}
            showBack={cards[index].opened}
            onClick={() => handleClick(index)}
          />
        ))}
      </div>
    </div>
  )
}

export default Board

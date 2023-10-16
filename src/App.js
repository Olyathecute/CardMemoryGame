import { useState } from 'react'
import Board from './Board'
import StartPage from './StartPage'
import { imageTypes } from './data'
import './App.css'

const createBoard = ({ size, images }) => {
  const setSize = size === 'small' ? 8 : 18
  const fullBoard = imageTypes[images].slice(0, setSize)
  const boardSet = fullBoard.concat(fullBoard)
  const shuffleBoardSet = boardSet.sort(() => Math.random() - 0.5)

  return {
    boardSet: shuffleBoardSet,
    boardSizeName: size,
  }
}

function App() {
  const [gameIsActive, setGameIsActive] = useState(false)
  const [board, setBoard] = useState(null)

  const startGame = (preferences) => {
    setGameIsActive(true)
    setBoard(createBoard(preferences))
  }

  return (
    <>
      <header>
        <h1>Card Memory Game</h1>
      </header>

      <div className='main'>
        {gameIsActive ? (
          <>
            <Board board={board} />
            <button className='btn' onClick={() => setGameIsActive(false)}>
              Close Game
            </button>
          </>
        ) : (
          <StartPage startGame={startGame} />
        )}
      </div>
    </>
  )
}

export default App

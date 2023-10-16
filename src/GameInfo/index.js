import Timer from '../Timer'
import './GameInfo.css'

function GameInfo({ gameFinished, moves }) {
  return (
    <div className='info'>
      <Timer gameFinished={gameFinished} />
      <div>Moves: {moves}</div>
    </div>
  )
}

export default GameInfo

import Timer from '../Timer';
import './GameInfo.css';

function GameInfo({ newGame, stopTimer, moves }) {
  return (
    <div className="info">
      <Timer newGame={newGame} stopTimer={stopTimer} />
      <div>Moves: {moves}</div>
    </div>
  );
}

export default GameInfo;

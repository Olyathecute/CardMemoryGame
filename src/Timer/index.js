import { useEffect, useState } from 'react'

function Timer({ gameFinished }) {
  const [time, setTime] = useState(0)
  const [timerIntervalId, setTimerIntervalId] = useState(null)

  useEffect(() => {
    const intervalId = setInterval(() => setTime((time) => time + 1), 1000)
    setTimerIntervalId(intervalId)
  }, [])

  useEffect(() => {
    if (gameFinished) {
      clearInterval(timerIntervalId)
      setTimerIntervalId(null)
    }
  }, [gameFinished, timerIntervalId])

  return (
    <div>
      <span>Timer:&nbsp;</span>
      <span>
        {String(Math.trunc(time / 60)).padStart(2, '0')}:{String(time % 60).padStart(2, '0')}
      </span>
    </div>
  )
}

export default Timer

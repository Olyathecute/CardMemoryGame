import { useEffect, useState } from "react";

function Timer({ newGame, stopTimer }) {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    stopTimer && setTimerOn(false);
  }, [stopTimer]);

  useEffect(() => {
    setTimerOn(newGame);
  }, [newGame]);

  useEffect(() => {
    let intervalId = null;

    if (timerOn) {
      intervalId = setInterval(() => setTime((time) => time + 1), 1000);
    }

    return () => clearInterval(intervalId);
  }, [timerOn, time]);

  return (
    <div>
      <span>Timer:&nbsp;</span>
      <span>
        {("0" + Math.trunc(time / 60)).slice(-2)}:
        {("0" + (time % 60)).slice(-2)}
      </span>
    </div>
  );
}

export default Timer;

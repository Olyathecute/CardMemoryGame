import { useEffect, useState } from "react";
import "./Timer.css";

function Timer({ newGame }) {
  const [time, setTime] = useState(0);
  const [timerOn, setTimerOn] = useState(false);

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
    <>
      <div className="timer">
        <span>Timer:&nbsp;</span>
        <span className="interval">
          {("0" + Math.trunc(time / 60)).slice(-2)}
        </span>
        <span className="column">:</span>
        <span className="interval">{("0" + (time % 60)).slice(-2)}</span>
      </div>
    </>
  );
}

export default Timer;

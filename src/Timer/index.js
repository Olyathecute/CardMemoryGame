import { useEffect, useState } from "react";
import "./Timer.css";

const twoSign = (time) => (time >= 10 ? time : "0" + time);

function Timer({ newGame }) {
  const [time, setTime] = useState({ min: 0, sec: 0 });
  const [timerOn, setTimerOn] = useState(false);

  useEffect(() => {
    setTimerOn(newGame);
  }, [newGame]);

  useEffect(() => {
    let interval = { min: null, sec: null };

    if (timerOn) {
      interval.min = setInterval(() => {
        setTime((time) => ({ ...time, min: time.min + 1 }));
      }, 60000);
      interval.sec = setInterval(() => {
        setTime((time) => ({ ...time, sec: time.sec + 1 }));
      }, 1000);
    } else {
      clearInterval(interval.min);
      clearInterval(interval.sec);
    }

    return () => {
      clearInterval(interval.min);
      clearInterval(interval.sec);
    };
  }, [timerOn, time]);

  return (
    <>
      {/* <button onClick={() => setTimerOn(true)}>Start</button>
      <button onClick={() => setTimerOn(false)}>stop</button> */}

      <div className="timer">
        <span>Timer:&nbsp;</span>
        <span className="interval">{twoSign(time.min)}</span>
        <span className="column">:</span>
        <span className="interval">{twoSign(time.sec)}</span>
      </div>
    </>
  );
}

export default Timer;

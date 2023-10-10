import { useState, useRef, useEffect } from "react";
import { CSSTransition } from "react-transition-group";
import "./Card.css";

const createUniqId = (name) => name + "_" + Math.floor(Math.random() * 1000);
const getCardName = (id) => id.split("_")[0];

function Card({
  element,
  match,
  setMatch,
  disabledCards,
  turnOver,
  setTurnOver,
}) {
  const { picture, name } = element;
  const [showBack, setShowBack] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    if (turnOver) {
      setTimeout(() => {
        setShowBack(false);
        setTurnOver(false);
      }, 600);
    }
  }, [turnOver, setTurnOver]);

  return (
    <CSSTransition
      in={disabledCards.includes(name) ? true : showBack}
      timeout={300}
      classNames="flip"
      nodeRef={nodeRef}
    >
      <div
        id={createUniqId(name)}
        ref={nodeRef}
        className="card-container"
        disabled={disabledCards.includes(name)}
        onClick={({
          target: {
            offsetParent: { id },
          },
        }) => {
          console.log("match", match);

          match.first
            ? setMatch({ ...match, second: getCardName(id) })
            : setMatch({ ...match, first: getCardName(id) });
          console.log("event", id);

          setShowBack((variable) => !variable);
        }}
      >
        <div className="card-back">{picture}</div>
        <div className="card-front">?</div>
      </div>
    </CSSTransition>
  );
}

export default Card;

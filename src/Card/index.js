import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./Card.css";

function Card({
  element,
  firstCard,
  setFirstCard,
  setSecondCard,
  disabledCards,
}) {
  const { picture, name } = element;
  const [showBack, setShowBack] = useState(false);
  const nodeRef = useRef(null);

  console.log("disabledCards", disabledCards);

  return (
    <CSSTransition
      in={showBack}
      timeout={300}
      classNames="flip"
      nodeRef={nodeRef}
    >
      <div
        id={name}
        ref={nodeRef}
        className="card-container"
        disabled={disabledCards.includes(name)}
        onClick={({
          target: {
            offsetParent: { id },
          },
        }) => {
          console.log("firstCard", firstCard);

          firstCard ? setSecondCard(id) : setFirstCard(id);
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

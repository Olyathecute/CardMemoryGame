import { useState, useRef } from "react";
import { CSSTransition } from "react-transition-group";
import "./Card.css";

function Card({ element }) {
  const [showBack, setShowBack] = useState(false);
  const nodeRef = useRef(null);

  return (
    <CSSTransition
      in={showBack}
      timeout={300}
      classNames="flip"
      nodeRef={nodeRef}
    >
      <div
        ref={nodeRef}
        className="card-container"
        onClick={() =>
          setShowBack((variable) => {
            console.log("click");
            return !variable;
          })
        }
      >
        <div className="card-back">{element}</div>
        <div className="card-front">?</div>
      </div>
    </CSSTransition>
  );
}

export default Card;

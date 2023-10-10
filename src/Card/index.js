import { useState, useRef, useEffect } from 'react';
import { CSSTransition } from 'react-transition-group';
import './Card.css';

const createUniqId = (element, index) => element + '_' + index;
const getCardName = (id) => id.split('_')[0];

function Card({
  element,
  match,
  setMatch,
  disabledCards,
  turnOver,
  setTurnOver,
  index,
}) {
  const [showBack, setShowBack] = useState(false);
  const nodeRef = useRef(null);

  useEffect(() => {
    if (turnOver) {
      setTimeout(() => {
        setShowBack(false);
        setTurnOver(false);
      }, 700);
    }
  }, [turnOver, setTurnOver]);

  return (
    <CSSTransition
      in={disabledCards.includes(element) ? true : showBack}
      timeout={300}
      classNames="flip"
      nodeRef={nodeRef}
    >
      <div
        id={createUniqId(element, index)}
        ref={nodeRef}
        className="card-container"
        disabled={disabledCards.includes(element) || match.current === index}
        onClick={({
          target: {
            offsetParent: { id },
          },
        }) => {
          match.first
            ? setMatch({ ...match, second: getCardName(id) })
            : setMatch({
                ...match,
                first: getCardName(id),
                current: index,
              });

          setShowBack((variable) => !variable);
        }}
      >
        <div className="card-back">{element}</div>
        <div className="card-front">?</div>
      </div>
    </CSSTransition>
  );
}

export default Card;

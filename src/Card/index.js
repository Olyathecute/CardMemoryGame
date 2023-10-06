import "./Card.css";

function Card({ element }) {
  return (
    <>
      <div className="card-container">
        <div className="card-back">?</div>
        <div className="card-front">{element}</div>
      </div>
    </>
  );
}

export default Card;

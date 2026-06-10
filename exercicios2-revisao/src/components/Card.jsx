import "./Card.css";

function Card({ titulo, children }) {
  return (
    <div className="card">
      <h2>{titulo}</h2>

      <div className="card-content">
        {children}
      </div>
    </div>
  );
}

export default Card;
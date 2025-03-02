import React from "react";
import "./Card.css"; // Assuming you have specific styles for the card

const Card = ({ tech }) => {
  return (
    <div className="technology-card">
      <img src={tech.imageUrl} alt={tech.name} /> {/* Use tech.imageUrl instead of tech.image */}
      <div className="card-header">
        <h2>{tech.name}</h2>
        <p>{tech.description}</p>
      </div>
    </div>
  );
};

export default Card;

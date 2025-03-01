import React from "react";
import "./Card.css"; // Assuming you have specific styles for the card

const Card = ({ tech }) => {
  return (
    <div className="technology-card">
      <img src={tech.image} alt={tech.name} /> {/* Assuming tech has an image field */}
      <h2>{tech.name}</h2>
      <p>{tech.description}</p> {/* Assuming tech has a description field */}
    </div>
  );
};

export default Card;

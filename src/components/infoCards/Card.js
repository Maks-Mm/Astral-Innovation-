import React from "react";

function Card({ tech }) {
  return (
    <div key={tech.id} className="technology-card">
      <h2>{tech.name}</h2>
      <img
        src={tech.imageUrl}
        alt={tech.name}
        style={{ width: "100px", height: "100px" }}
      />

      <p>{tech.description}</p>
    </div>
  );
}

export default Card;

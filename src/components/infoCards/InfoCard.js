import React from "react";

function InfoCard({ tech, description, onClose }) {
  return (
    <div
      style={{
        position: "absolute",
        top: "20%",
        left: "50%",
        transform: "translate(-50%, -50%)",
        background: "white",
        padding: "20px",
        borderRadius: "10px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        textAlign: "center",
      }}
    >
      <h2>{tech}</h2>
      <p>{description}</p>
      <button onClick={onClose}>Close</button>
    </div>
  );
}

export default InfoCard;

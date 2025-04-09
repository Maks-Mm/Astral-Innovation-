import React, { useRef } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css";

const Card = ({ tech }) => {
  const cardRef = useRef(null);

  const handleMouseMove = (e) => {
    const card = cardRef.current;
    const rect = card.getBoundingClientRect();
    card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
    card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
  };


  return (
    <div
      className="technology-card"
      data-aos="flip-left"
      ref={cardRef}
      onMouseMove={handleMouseMove}
    >
      <img
        src={tech.imageUrl}
        alt={tech.name}
        className="card-image"
      />
      <div className="card-header">
        <h2>{tech.name}</h2>
        <p>{tech.description}</p>
      </div>
    </div>
  );
};

export default Card;

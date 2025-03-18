import React, { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import "./Card.css"; // Import CSS styles

const Card = ({ tech }) => {
  useEffect(() => {
    AOS.init({ once: false, duration: 2000, easing: "ease-out-cubic" });
  }, []);

  return (
    <div
      className="technology-card"
      data-aos="flip-left"
    >
      <img src={tech.imageUrl} alt={tech.name} className="card-image" />
      <div className="card-header">
        <h2>{tech.name}</h2>
        <p>{tech.description}</p>
      </div>
    </div>
  );
};

export default Card;

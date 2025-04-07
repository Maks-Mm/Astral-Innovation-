import React from "react";
import "./Planet.css";

const Planet = () => {
  return (
    <div className="planet-container">
      <div className="planet-position">
        <div className="earth day"></div>
        <div className="earth night"></div>
      </div>
      <h2 className="planet-title title text-4xl font-bold text-blue-500 mb-4">
        International Community & Support from all World
      </h2>
    </div>
  );
};

export default Planet;

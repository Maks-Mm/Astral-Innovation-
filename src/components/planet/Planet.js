import React from "react";
import "./Planet.css";

const Planet = () => {
  return (
    <div className="planet-container">
      <div className="planet-wrapper">
        <div className="planet-position">
          <div className="earth day"></div>
          <div className="earth night"></div>
        </div>
      </div>
      <h2 className="planet-title slanted-text text-4xl font-bold text-blue-500 mb-4 mt-5">
        International Community <br></br> & <br></br>Worldwide Support
      </h2>
    </div>
  );
};

export default Planet;

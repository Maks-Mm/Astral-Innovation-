import React from "react";
import "./Guides.css"; // Import the CSS file for styles
import { Link, Outlet } from "react-router-dom";

function Guides() {
  return (
    <div className="guides-container">
      <p className="guides-text bungee-tint-regular">
        <Link to="/react">React </Link>
        <Link to="/next">NEXT</Link>
        <Link to="/html">HTML</Link>
        <Link to="/javaScript">JavaScript</Link>
      </p>
      <Outlet />
    </div>
  );
}

export default Guides;

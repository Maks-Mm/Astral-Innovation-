import React from "react";
import "./Guides.css"; // Import the CSS file for styles
import { Link, Outlet } from "react-router-dom";

function Guides() {
  return (
    <div className="guides-container">
      <p className="guides-text bungee-tint-regular">
        <marquee  scrollamount="2">

        <Link to="/guides/react">React </Link>
        <Link to="/guides/next">NEXT</Link>
        <Link to="/guides/html">HTML</Link>
        <Link to="/guides/javaScript">JavaScript</Link>
        </marquee>
      </p>
      <Outlet />
    </div>
  );
}

export default Guides;

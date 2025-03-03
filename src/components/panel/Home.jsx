import React from "react";
import "./Home.css"; // Importing the CSS file
import Search from "../search/Search";

function Home() {
  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Home Page</h1>
      <p className="home-text">
        <Search /> {/* Place the Search component here */}
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
        dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet,
        consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur
      </p>
      <p className="home-text">
        Welcome to My Home PageWelcome to My Home PageWelcome to My Home
      </p>
    </div>
  );
}

export default Home;

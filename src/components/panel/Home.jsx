import React, { useState } from "react";
import "./Home.css";
import Search from "../search/Search"; // Ensure you have the correct path to your Search component

function Home() {
  const [results, setResults] = useState([]);

  const handleSearch = async (query) => {
    console.log("Search query:", query); // Debug: log the search query
    try {
      const response = await fetch(`http://localhost:3001/search?q=${query}`);
      const data = await response.json();
      console.log("Search results:", data); // Debug: log the results from the server
      setResults(data); // Store the search results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };
  

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Home Page</h1>
      <Search onSearch={handleSearch} />

      <div className="search-results">
        {results.length > 0 ? (
          <ul>
            {results.map((item) => (
              <li key={item.id} className="search-result-item">
                <img src={item.imageUrl} alt={item.name} className="result-image" />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </li>
            ))}
          </ul>
        ) : (
          <p>No results found</p>
        )}
      </div>

      <p className="home-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

export default Home;

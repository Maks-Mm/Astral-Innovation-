import React, { useState, useEffect } from "react";
import "./Home.css";
import Search from "../search/Search"; // Ensure you have the correct path to your Search component

function Home() {
  const [results, setResults] = useState([]);
  const [searchTechnologies, setSearchTechnologies] = useState([]);

  useEffect(() => {
    const fetchTechnologies = async () => {
      try {
        const response = await fetch("http://localhost:3001/technologies");
        const data = await response.json();
        setSearchTechnologies(data); // Store the technologies in state
      } catch (error) {
        console.error("Error fetching technologies:", error);
      }
    };

    fetchTechnologies();
  }, []);

  const handleSearch = async (query) => {
    try {
      const response = await fetch(`http://localhost:3001/search?q=${query}`);
      const data = await response.json();
      console.log("Search results:", data); // Log the results from the server
      setResults(data); // Store the search results
      console.log("Updated results state:", data); // Log updated state
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  return (
    <div className="home-container">
      <h1 className="home-title">Welcome to My Home Page</h1>
      <Search onSearch={handleSearch} />

      <h2>Search Results</h2>
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

      <h2>All Technologies</h2>
      <div className="technologies-list">
        <ul>
          {searchTechnologies.map((tech) => (
            <li key={tech.id}>
              <img src={tech.imageUrl} alt={tech.name} className="result-image" />
              <h3>{tech.name}</h3>
              <p>{tech.description}</p>
            </li>
          ))}
        </ul>
      </div>

      <p className="home-text">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
      </p>
    </div>
  );
}

export default Home;

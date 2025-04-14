import React, { useState, useEffect } from "react";
import "./Home.css";
import Search from "../search/Search"; // Ensure you have the correct path to your Search component
import MyCarousel from "../../carousel/MyCarousel";

function Home() {
  const [results, setResults] = useState([]);
  const [searchTechnologies, setSearchTechnologies] = useState([]);
  const [isSearching, setIsSearching] = useState(false); // State to track if a search has occurred

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
    if (!query.trim()) {
      setIsSearching(false); // Reset if the search query is empty
      setResults([]); // Clear results if no query
      return;
    }
    setIsSearching(true); // Set search status to true

    try {
      const response = await fetch(`http://localhost:3001/search?q=${query}`);
      const data = await response.json();
      console.log("Search results:", data); // Log the results from the server
      setResults(data); // Store the search results
    } catch (error) {
      console.error("Error fetching search results:", error);
    }
  };

  // Function to handle mouse movement for glow effect
  const handleMouseMove = (e) => {
    const cards = document.querySelectorAll(".technology-card");
    cards.forEach((card) => {
      const rect = card.getBoundingClientRect();
      card.style.setProperty("--mouse-x", `${e.clientX - rect.left}px`);
      card.style.setProperty("--mouse-y", `${e.clientY - rect.top}px`);
    });
  };

  return (
    <div className="home-container" onMouseMove={handleMouseMove}>
      <h1 className="top-picture">
        <img src="toppicture1.png" alt="Search Icon" className="w-[900px] h-[245px]"  />
      </h1>
      <Search onSearch={handleSearch} />
      {isSearching ? ( // Only show search results if searching
        <div className="search-results">
          {results.length > 0 ? (
            results.map((item) => (
              <div key={item.id} className="technology-card">
                <img src={item.imageUrl} alt={item.name} className="result-image" />
                <h2>{item.name}</h2>
                <p>{item.description}</p>
              </div>
            ))
          ) : (
            <p>No results found</p>
          )}
        </div>
      ) : (
        <p className="text-white">Please enter a technology to search.</p> // Prompt for the user when no search has been made
      )}
      <MyCarousel /> {/* Place the carousel here */}
    </div>
  );
}

export default Home;

import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "./Search.css"; 

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");
  const [stars, setStars] = useState([]);

  useEffect(() => {
    AOS.init({ duration: 1500 });
  }, []);

  const handleSearch = () => {
    onSearch(query);
    createStars();
  };

  const createStars = () => {
    const newStars = [];
    for (let i = 0; i < 5; i++) {
      newStars.push({
        id: i,
        left: Math.random() * 100 + "%", // Random horizontal position
        top: Math.random() * 100 + "%", // Random vertical position
      });
    }
    setStars(newStars);
    setTimeout(() => setStars([]), 500); // Clear stars after 500ms
  };

  return (
    <div className="search-container glass-card-effect" data-aos="fade-right">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
        onKeyDown={(e) => (e.key === "Enter" ? handleSearch() : null)}
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>

      {stars.map((star) => (
        <div
          key={star.id}
          className="stars"
          style={{
            left: star.left,
            top: star.top,
            position: 'absolute',
            opacity: 1,
            transform: 'rotate(45deg)',
            transition: 'transform 0.5s ease-out, opacity 0.5s ease-in-out',
          }}
        />
      ))}
    </div>
  );
};

export default Search;

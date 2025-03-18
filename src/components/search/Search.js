import React, { useState, useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css"; 
import "./Search.css"; 

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  useEffect(() => {
    AOS.init({ duration: 1500 }); 
  }, []);

  const handleSearch = () => {
    onSearch(query); 
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
    </div>
  );
};

export default Search;

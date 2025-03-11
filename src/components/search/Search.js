import React, { useState } from "react";
import "./Search.css"; // Ensure you have the styles defined here

const Search = ({ onSearch }) => {
  const [query, setQuery] = useState("");

  const handleSearch = () => {
    onSearch(query); // Trigger search on the parent component
  };

  return (
    <div className="search-container">
      <input
        type="text"
        placeholder="Search..."
        value={query}
        onChange={(e) => setQuery(e.target.value)}
        className="search-input"
        onKeyDown={(e) => e.key === 'Enter' ? handleSearch() : null} // Allow pressing Enter to trigger search
      />
      <button onClick={handleSearch} className="search-button">
        Search
      </button>
    </div>
  );
};

export default Search;

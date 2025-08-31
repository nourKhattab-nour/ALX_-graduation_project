"use client";

import { useState } from "react";

const SearchSection = ({ onSearch }) => {
  

  const [searchInput, setSearchInput] = useState(""); 

  const handleSubmit = (e) => {
    e.preventDefault();
    if (searchInput.trim()) {
      onSearch(searchInput);
    }
  };

  return (
    <div>
      
      <div className="search-section">
        <div className="container">
          <div className="search-filters">
            

            <form className="search-row" onSubmit={handleSubmit}>
              
              <div className="search-field">
                <label htmlFor="movie-search">Movie Title or Actor</label>
                <input
                  type="text"
                  id="movie-search"
                  placeholder="Search for The Avengers, Tom Hanks..."
                  className="search-input"
                  value={searchInput}
                  onChange={(i) => setSearchInput(i.target.value)} // This updates state
                />
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SearchSection;

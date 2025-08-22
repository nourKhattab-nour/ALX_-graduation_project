import React from "react";

const SearchSection = () => {
  return (
    <div>
      {/* Start Search Section */}
      <div className="search-section">
        <div className="container">
          <div className="search-filters">
            <div className="search-row">
              {/* Movie Search */}
              <div className="search-field">
                <label htmlFor="movie-search">Movie Title or Actor</label>
                <input
                  type="text"
                  id="movie-search"
                  placeholder="Search for The Avengers, Tom Hanks..."
                  className="search-input"
                />
              </div>

              {/* Genre Select */}
              <div className="search-field">
                <label htmlFor="genre-select">Genre</label>
                <select id="genre-select" className="search-select">
                  <option value="">All Genres</option>
                  <option value="action">Action</option>
                  <option value="adventure">Adventure</option>
                  <option value="comedy">Comedy</option>
                  <option value="drama">Drama</option>
                  <option value="fantasy">Fantasy</option>
                  <option value="horror">Horror</option>
                  <option value="romance">Romance</option>
                  <option value="sci-fi">Sci-Fi</option>
                  <option value="thriller">Thriller</option>
                </select>
              </div>

              {/* Rating Slider */}
              <div className="search-field">
                <label htmlFor="rating-range">Minimum Rating</label>
                <input
                  type="range"
                  id="rating-range"
                  min="0"
                  max="10"
                  step="0.1"
                  defaultValue="0"
                  className="rating-slider"
                />
                <span className="rating-display">0.0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* End Search Section */}
    </div>
  );
};

export default SearchSection;

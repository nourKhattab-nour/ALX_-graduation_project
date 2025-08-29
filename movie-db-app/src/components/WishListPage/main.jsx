import React from "react";

const Main = () => {
  return (
    <div>
      {/* Watchlist Content */}
      <div className="main-content">
        <section className="watchlist-section">
          <div className="container">
            <div className="watchlist-header">
              <h1 className="page-title">My Watchlist</h1>
              <p className="page-description">
                Keep track of movies you want to watch
              </p>
            </div>

            {/* Watchlist Movies */}
            <div className="movie-grid watchlist-grid">
              <div className="movie-card watchlist-card">
                <div className="movie-poster">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="The Last Oracle"
                  />
                  <div className="movie-overlay">
                    <button className="btn btn-primary btn-small">
                      Watch Now
                    </button>
                    <button className="btn btn-danger btn-small remove-btn">
                      Remove
                    </button>
                  </div>
                </div>
                <div className="movie-info">
                  <h3 className="movie-title">The Last Oracle</h3>
                  <p className="movie-year">2024 • PG-13 • 2h 14m</p>
                  <div className="movie-rating">
                    <span className="star">★</span>
                    <span className="rating-value">8.7</span>
                  </div>
                  <div className="movie-genres">
                    <span className="genre-tag">Fantasy</span>
                    <span className="genre-tag">Adventure</span>
                    <span className="genre-tag">Action</span>
                  </div>
                </div>
              </div>

              <div className="movie-card watchlist-card">
                <div className="movie-poster">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Cybernetic Echo"
                  />
                  <div className="movie-overlay">
                    <button className="btn btn-primary btn-small">
                      Watch Now
                    </button>
                    <button className="btn btn-danger btn-small remove-btn">
                      Remove
                    </button>
                  </div>
                </div>
                <div className="movie-info">
                  <h3 className="movie-title">Cybernetic Echo</h3>
                  <p className="movie-year">2024 • R • 1h 58m</p>
                  <div className="movie-rating">
                    <span className="star">★</span>
                    <span className="rating-value">9.1</span>
                  </div>
                  <div className="movie-genres">
                    <span className="genre-tag">Sci-Fi</span>
                    <span className="genre-tag">Thriller</span>
                  </div>
                </div>
              </div>

              <div className="movie-card watchlist-card">
                <div className="movie-poster">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Mountain's Whisper"
                  />
                  <div className="movie-overlay">
                    <button className="btn btn-primary btn-small">
                      Watch Now
                    </button>
                    <button className="btn btn-danger btn-small remove-btn">
                      Remove
                    </button>
                  </div>
                </div>
                <div className="movie-info">
                  <h3 className="movie-title">Mountain's Whisper</h3>
                  <p className="movie-year">2024 • PG • 2h 5m</p>
                  <div className="movie-rating">
                    <span className="star">★</span>
                    <span className="rating-value">7.5</span>
                  </div>
                  <div className="movie-genres">
                    <span className="genre-tag">Drama</span>
                    <span className="genre-tag">Adventure</span>
                  </div>
                </div>
              </div>

              <div className="movie-card watchlist-card">
                <div className="movie-poster">
                  <img
                    src="/placeholder.svg?height=400&width=300"
                    alt="Dimension Drift"
                  />
                  <div className="movie-overlay">
                    <button className="btn btn-outline btn-small">
                      Coming Soon
                    </button>
                    <button className="btn btn-danger btn-small remove-btn">
                      Remove
                    </button>
                  </div>
                </div>
                <div className="movie-info">
                  <h3 className="movie-title">Dimension Drift</h3>
                  <p className="movie-year">2025 • Not Rated</p>
                  <div className="movie-rating">
                    <span className="star">★</span>
                    <span className="rating-value">--</span>
                  </div>
                  <div className="movie-genres">
                    <span className="genre-tag">Sci-Fi</span>
                    <span className="genre-tag">Action</span>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="empty-watchlist" style={{ display: "none" }}>
              <div className="empty-icon">📽️</div>
              <h2>Your watchlist is empty</h2>
              <p>Start adding movies you want to watch!</p>
              <a href="search.html" className="btn btn-primary">
                Browse Movies
              </a>
            </div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Main;

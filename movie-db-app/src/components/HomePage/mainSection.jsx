// src/components/HomePage/mainSection.jsx
import React, { useState, useEffect } from "react";
import { searchMovies } from "../../services/api";
import { useNavigate } from "react-router-dom";

const mainSection = () => {
  const [trendingMovies, setTrendingMovies] = useState([]);
  const [comingSoonMovies, setComingSoonMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
   const navigate = useNavigate();

  const getTrendingMovies = async () => {
    console.log("Getting trending movies...");
    try {
      const searchTerms = [
        "batman",
        "spider",
        "avengers",
        "superman",
        "iron",
        "star",
      ];
      const allMovies = [];

      for (const term of searchTerms) {
        try {
          console.log(`Searching for: ${term}`);
          const data = await searchMovies(term);
          console.log(`Results for ${term}:`, data);

          if (data.Search && data.Search.length > 0) {
            // Add first movie from each search
            allMovies.push(data.Search[0]);
            console.log(`Added movie: ${data.Search[0].Title}`);
          }
        } catch (searchError) {
          console.log(`Search failed for ${term}:`, searchError);
        }
      }

      console.log("Total trending movies found:", allMovies.length);
      return allMovies.slice(0, 6); 
    } catch (error) {
      console.error(" Error in getTrendingMovies:", error);
      return [];
    }
  };

  const getComingSoonMovies = async () => {
    console.log(" Getting coming soon movies...");
    try {
      const data = await searchMovies("2024");
      console.log("Coming soon search results:", data);

      if (data.Search && data.Search.length > 0) {
        console.log("Coming soon movies found:", data.Search.length);
        return data.Search.slice(0, 2);
      }

      console.log(" No coming soon movies found");
      return [];
    } catch (error) {
      console.error(" Error in getComingSoonMovies:", error);
      return [];
    }
  };


  useEffect(() => {
    const fetchMovies = async () => {
      console.log("🎬 Starting to fetch movies...");
      setLoading(true);
      setError(null);

      try {
        
        const trending = await getTrendingMovies();
        console.log("Setting trending movies:", trending);
        setTrendingMovies(trending);

        const comingSoon = await getComingSoonMovies();
        console.log("Setting coming soon movies:", comingSoon);
        setComingSoonMovies(comingSoon);

        if (trending.length === 0 && comingSoon.length === 0) {
          setError("No movies could be loaded. This might be an API issue.");
        }
      } catch (err) {
        console.error("Main error:", err);
        setError(`Failed to load movies: ${err.message}`);
      } finally {
        setLoading(false);
        console.log("Finished loading movies");
      }
    };

    fetchMovies();
  }, []);

  const handleMoreInfo = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  
  if (loading) {
    return (
      <div className="main-content">
        <div className="loading-message">
          <h2>Loading Movies...</h2>
          <p>Please wait while we fetch movies from the API...</p>
          <p>
            <em>Check the browser console (F12) for debug info</em>
          </p>
        </div>
      </div>
    );
  }

  
  if (error) {
    return (
      <div className="main-content">
        <div className="error-message">
          <h2> Error Loading Movies</h2>
          <p>{error}</p>
          <p>
            <strong>Debug Steps:</strong>
          </p>
          <ol>
            <li>Open browser console (F12)</li>
            <li>Check for error messages</li>
            <li>Refresh the page</li>
            <li>Check your internet connection</li>
          </ol>
          <button
            className="btn btn-primary"
            onClick={() => window.location.reload()}
          >
            Try Again
          </button>
        </div>
      </div>
    );
  }
  return (
    <div>
      <div className="main-content">
        
        <div className="movie-section">
          <h2 className="section-title">Trending Now</h2>

          {trendingMovies.length === 0 ? (
            <p>No trending movies available right now.</p>
          ) : (
            <div className="movie-grid" id="trending-movies">
              {trendingMovies.map((movie) => (
                <div className="movie-card" key={movie.imdbID}>
                  <div className="movie-poster">
                    <img
                      src={
                        movie.Poster && movie.Poster !== "N/A"
                          ? movie.Poster
                          : "/placeholder.svg?height=400&width=300"
                      }
                      alt={movie.Title}
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=400&width=300";
                      }}
                    />
                    <div className="movie-overlay">
                      <button
                        className="btn btn-primary btn-small"
                        onClick={() => handleMoreInfo(movie.imdbID)}
                      >
                        More Info
                      </button>
                    </div>
                  </div>
                  <div className="movie-info">
                    <h3 className="movie-title">{movie.Title}</h3>
                    <p className="movie-year">{movie.Year}</p>
                    <div className="movie-rating">
                      <span className="star">★</span>
                      <span className="rating-value">
                        {movie.imdbRating || "8.0"}
                      </span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

       
        <section className="movie-section">
          <h2 className="section-title">Coming Soon</h2>

          {comingSoonMovies.length === 0 ? (
            <p>No upcoming movies available right now.</p>
          ) : (
            <div className="movie-grid" id="coming-soon">
              {comingSoonMovies.map((movie) => (
                <div className="movie-card" key={movie.imdbID}>
                  <div className="movie-poster">
                    <img
                      src={
                        movie.Poster && movie.Poster !== "N/A"
                          ? movie.Poster
                          : "/placeholder.svg?height=400&width=300"
                      }
                      alt={movie.Title}
                      onError={(e) => {
                        e.target.src = "/placeholder.svg?height=400&width=300";
                      }}
                    />
                    <div className="movie-overlay">
                      <button className="btn btn-outline btn-small">
                        Coming Soon
                      </button>
                    </div>
                  </div>
                  <div className="movie-info">
                    <h3 className="movie-title">{movie.Title}</h3>
                    <p className="movie-year">{movie.Year}</p>
                    <div className="movie-rating">
                      <span className="star">★</span>
                      <span className="rating-value">--</span>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>
      </div>
    </div>
  );
};

export default mainSection;

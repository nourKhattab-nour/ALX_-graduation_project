import { useState } from "react";
import { useNavigate } from "react-router-dom"; 
import { searchMovies } from "../../services/api"; 
import SearchSection from "./searchSection";

const main = () => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const navigate = useNavigate(); 

  const handleMoreInfo = (movieId) => {
    navigate(`/movie/${movieId}`);
  };

  
  const handleSearch = async (term) => {
    setLoading(true);
    setError(null);
    setSearchTerm(term);

    try {
      const data = await searchMovies(term);
      setMovies(data.Search || []); 
    } catch (err) {
      setError(err.message);
      setMovies([]); 
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <div className="main-content">
        <section className="movie-section">
          
          <SearchSection onSearch={handleSearch} />

          <h2 className="section-title">
            Search Results{" "}
            {movies.length > 0 && (
              <span className="results-count">({movies.length})</span>
            )}
          </h2>

         
          {loading && <p className="loading-message">Loading movies...</p>}

          
          {error && <p className="error-message">Error: {error}</p>}

          
          {!loading && !error && movies.length === 0 && searchTerm && (
            <p className="no-results">
              No movies found for "{searchTerm}". Try a different search.
            </p>
          )}

          
          <div className="movie-grid search-results">
            {movies.map((movie) => (
              <div className="movie-card" key={movie.imdbID}>
                <div className="movie-poster">
                  <img
                    src={
                      movie.Poster !== "N/A"
                        ? movie.Poster
                        : "/placeholder.svg?height=400&width=300"
                    }
                    alt={movie.Title}
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
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </div>
  );
};

export default main;

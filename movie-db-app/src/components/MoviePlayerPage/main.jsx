"use client";

import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieDetails } from "../../services/api";
import { Star } from "lucide-react";

const main = () => {
  const { id } = useParams();
  const [movie, setMovie] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isInWatchlist, setIsInWatchlist] = useState(false);

  useEffect(() => {
    const fetchMovieDetails = async () => {
      try {
        setLoading(true);
        const data = await getMovieDetails(id);
        setMovie(data);

        const watchlist = JSON.parse(localStorage.getItem("watchlist") || "[]");
        setIsInWatchlist(watchlist.some((item) => item.imdbID === data.imdbID));
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchMovieDetails();
  }, [id]);


  if (loading)
    return <div className="loading-message">Loading movie details...</div>;
  if (error) return <div className="error-message">Error: {error}</div>;
  if (!movie) return <div className="no-movie">Movie not found.</div>;

  return (
    <div className="main-content">
      <section className="movie-hero-section">
        <div className="movie-hero-content">
          <div className="movie-hero-info">
            <div className="movie-meta">
              {movie.Year} • {movie.Rated} • {movie.Runtime}
            </div>
            <h1 className="movie-title">{movie.Title}</h1>
            <div className="movie-genres">
              {movie.Genre.split(", ").map((genre, index) => (
                <span key={index} className="genre-tag">
                  {genre}
                </span>
              ))}
            </div>
            <div className="movie-rating">
              <span className="rating-star">
                {" "}
                <Star size={28} color="gold" fill="gold" />
              </span>
              <span className="rating-value">{movie.imdbRating}</span>
              <span className="rating-total">/10</span>
              <span className="imdb-logo">IMDb</span>
            </div>
            <div className="movie-actions"></div>
          </div>
        </div>
      </section>

      <section className="movie-detail-section">
        <div className="movie-detail-container">
          <div className="movie-detail-poster">
            <img
              src={
                movie.Poster !== "N/A"
                  ? movie.Poster
                  : "/placeholder.svg?height=600&width=400"
              }
              alt={movie.Title}
              className="poster-image"
            />
          </div>

          <div className="movie-detail-info">
            <div className="plot-summary">
              <h2>Plot Summary</h2>
              <p className="movie-detail-plot">{movie.Plot}</p>
            </div>

            <div className="cast-section">
              <h2>Cast</h2>
              <div className="cast-grid">
                {movie.Actors.split(", ")
                  .slice(0, 4)
                  .map((actor, index) => (
                    <div key={index} className="cast-member">
                      <div className="cast-avatar">
                        {/* <img
                          src={`/abstract-geometric-shapes.png?height=80&width=80&query=${actor}`}
                          alt={actor}
                        /> */}
                      </div>
                      <div className="cast-info">
                        <div className="cast-name">{actor}</div>
                        <div className="cast-role">Actor</div>
                      </div>
                    </div>
                  ))}
              </div>
            </div>
          </div>
        </div>

        <div className="movie-details-sidebar">
          <h3>Details</h3>
          <div className="detail-item">
            <strong>Director:</strong>
            <span>{movie.Director}</span>
          </div>
          <div className="detail-item">
            <strong>Writers:</strong>
            <span>{movie.Writer}</span>
          </div>
          <div className="detail-item">
            <strong>Release Date:</strong>
            <span>{movie.Released}</span>
          </div>
          <div className="detail-item">
            <strong>Country:</strong>
            <span>{movie.Country}</span>
          </div>
          <div className="detail-item">
            <strong>Language:</strong>
            <span>{movie.Language}</span>
          </div>
          <div className="detail-item">
            <strong>Budget:</strong>
            <span>{movie.BoxOffice || "N/A"}</span>
          </div>

          <div className="ratings-section">
            <h3>Ratings</h3>
            {movie.Ratings &&
              movie.Ratings.map((rating, index) => (
                <div key={index} className="rating-item">
                  <span className="rating-source: ">{rating.Source}</span>
                  <span className="rating-score">{rating.Value}</span>
                </div>
              ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default main;

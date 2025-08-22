import React from 'react'

const main = () => {
  return (
    <div>
      {/* <!-- Start Movie Player Section --> */}
    <div className="player-main">
      
      <div className="player-container">
        <div className="video-wrapper">
          <video
            className="video-player"
            controls
            poster="/placeholder.svg?height=720&width=1280"
          >
            <source src="#" type="video/mp4" />
            <p>
              Your browser doesn't support HTML5 video. Here is a
              <a href="#">link to the video</a> instead.
            </p>
          </video>

         
          <div className="video-controls-overlay">
            <div className="controls-top">
              <button className="control-btn back-btn" onclick="goBack()">
                <span>←</span> Back
              </button>
              <div className="video-title-overlay">
                <h1 id="player-movie-title">The Last Oracle</h1>
              </div>
            </div>
          </div>
        </div>
      </div>

      
      <div className="movie-details-section">
        <div className="container">
          <div className="movie-details-grid">
            
            <div className="movie-info-column">
              <div className="movie-header">
                <h2 className="movie-title" id="movie-title">The Last Oracle</h2>
                <div className="movie-meta">
                  <span className="movie-year">2024</span>
                  <span className="movie-rating-badge">PG-13</span>
                  <span className="movie-duration">2h 14m</span>
                  <div className="movie-rating">
                    <span className="star">★</span>
                    <span className="rating-value">8.7</span>
                    <span className="rating-total">/10</span>
                  </div>
                </div>
              </div>

              
              <div className="genre-tags">
                <span className="genre-tag">Fantasy</span>
                <span className="genre-tag">Adventure</span>
                <span className="genre-tag">Action</span>
              </div>

             
              <div className="movie-actions">
                <button className="btn btn-primary">
                  <span className="btn-icon">+</span>
                  Add to Watchlist
                </button>
                <button className="btn btn-outline">
                  <span className="btn-icon">▶</span>
                  Play Trailer
                </button>
                <button className="btn btn-ghost">
                  <span className="btn-icon">↗</span>
                  Share
                </button>
              </div>

              
              <div className="plot-section">
                <h3 className="section-heading">Plot Summary</h3>
                <p className="plot-text">
                  In a realm where magic is fading, a young woman discovers she
                  is the last descendant of a powerful line of oracles. Hunted
                  by a shadowy empire that seeks to eradicate all magic, she
                  must embark on a perilous journey to awaken her latent powers
                  and find an ancient relic that could restore balance to the
                  world. With a cynical rogue and a loyal guardian by her side,
                  she confronts mythical beasts, navigates treacherous
                  landscapes, and ultimately decides the fate of magic itself.
                </p>
              </div>

           
              <div className="cast-section">
                <h3 className="section-heading">Cast</h3>
                <div className="cast-grid">
                  <div className="cast-member">
                    <div className="cast-avatar">
                      <img
                        src="/placeholder.svg?height=80&width=80"
                        alt="Anya Corazón"
                      />
                    </div>
                    <div className="cast-info">
                      <h4 className="cast-name">Anya Corazón</h4>
                      <p className="cast-character">as Elara</p>
                    </div>
                  </div>
                  <div className="cast-member">
                    <div className="cast-avatar">
                      <img
                        src="/placeholder.svg?height=80&width=80"
                        alt="Kaelen Vance"
                      />
                    </div>
                    <div className="cast-info">
                      <h4 className="cast-name">Kaelen Vance</h4>
                      <p className="cast-character">as Rhys</p>
                    </div>
                  </div>
                  <div className="cast-member">
                    <div className="cast-avatar">
                      <img
                        src="/placeholder.svg?height=80&width=80"
                        alt="Seraphina Jones"
                      />
                    </div>
                    <div className="cast-info">
                      <h4 className="cast-name">Seraphina Jones</h4>
                      <p className="cast-character">as Empress Lyra</p>
                    </div>
                  </div>
                  <div className="cast-member">
                    <div className="cast-avatar">
                      <img
                        src="/placeholder.svg?height=80&width=80"
                        alt="Garrick Thorne"
                      />
                    </div>
                    <div className="cast-info">
                      <h4 className="cast-name">Garrick Thorne</h4>
                      <p className="cast-character">as Lord Malakor</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            
            <div className="movie-sidebar">
              <div className="details-card">
                <h3 className="section-heading">Details</h3>
                <div className="detail-item">
                  <span className="detail-label">Director</span>
                  <span className="detail-value">Elena Petrova</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Writers</span>
                  <span className="detail-value">Sam Greene, J.L. Finch</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Release Date</span>
                  <span className="detail-value">Oct 25, 2024</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Country</span>
                  <span className="detail-value">USA</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Language</span>
                  <span className="detail-value">English</span>
                </div>
                <div className="detail-item">
                  <span className="detail-label">Budget</span>
                  <span className="detail-value">$150 Million</span>
                </div>
              </div>

          
              <div className="related-movies">
                <h3 className="section-heading">You Might Also Like</h3>
                <div className="related-movie-item">
                  <img
                    src="/placeholder.svg?height=120&width=80"
                    alt="Dragon's Legacy"
                    className="related-poster"
                  />
                  <div className="related-info">
                    <h4 className="related-title">Dragon's Legacy</h4>
                    <p className="related-year">2022</p>
                    <div className="related-rating">
                      <span className="star">★</span>
                      <span>8.3</span>
                    </div>
                  </div>
                </div>
                <div className="related-movie-item">
                  <img
                    src="/placeholder.svg?height=120&width=80"
                    alt="Mystic Realms"
                    className="related-poster"
                  />
                  <div className="related-info">
                    <h4 className="related-title">Mystic Realms</h4>
                    <p className="related-year">2023</p>
                    <div className="related-rating">
                      <span className="star">★</span>
                      <span>7.9</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Movie Player Section --> */}
    </div>
  )
}

export default main

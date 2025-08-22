import React from 'react'

const mainSection = () => {
  return (
    <div>
      {/* <!--Start Main Content --> */}
    <div className="main-content">
      <div className="movie-section">
        <h2 className="section-title">Trending Now</h2>
        <div className="movie-grid" id="trending-movies">
          <div className="movie-card">
            <div className="movie-poster">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Vengeance Run"
              />
              <div className="movie-overlay">
                <button className="btn btn-primary btn-small">Watch Now</button>
              </div>
            </div>
            <div className="movie-info">
              <h3 className="movie-title">Vengeance Run</h3>
              <p className="movie-year">2023</p>
              <div className="movie-rating">
                <span className="star">★</span>
                <span className="rating-value">8.5</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="movie-poster">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Parisian Summer"
              />
              <div className="movie-overlay">
                <button className="btn btn-primary btn-small">Watch Now</button>
              </div>
            </div>
            <div className="movie-info">
              <h3 className="movie-title">Parisian Summer</h3>
              <p className="movie-year">2024</p>
              <div className="movie-rating">
                <span className="star">★</span>
                <span className="rating-value">7.8</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="movie-poster">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Cybernetic Echo"
              />
              <div className="movie-overlay">
                <button className="btn btn-primary btn-small">Watch Now</button>
              </div>
            </div>
            <div className="movie-info">
              <h3 className="movie-title">Cybernetic Echo</h3>
              <p className="movie-year">2024</p>
              <div className="movie-rating">
                <span className="star">★</span>
                <span className="rating-value">9.1</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="movie-poster">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="The Sunken City"
              />
              <div className="movie-overlay">
                <button className="btn btn-primary btn-small">Watch Now</button>
              </div>
            </div>
            <div className="movie-info">
              <h3 className="movie-title">The Sunken City</h3>
              <p className="movie-year">2023</p>
              <div className="movie-rating">
                <span className="star">★</span>
                <span className="rating-value">8.2</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="movie-poster">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Mountain's Whisper"
              />
              <div className="movie-overlay">
                <button className="btn btn-primary btn-small">Watch Now</button>
              </div>
            </div>
            <div className="movie-info">
              <h3 className="movie-title">Mountain's Whisper</h3>
              <p className="movie-year">2024</p>
              <div className="movie-rating">
                <span className="star">★</span>
                <span className="rating-value">7.5</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="movie-poster">
              <img src="/placeholder.svg?height=400&width=300" alt="Nocturne" />
              <div className="movie-overlay">
                <button className="btn btn-primary btn-small">Watch Now</button>
              </div>
            </div>
            <div className="movie-info">
              <h3 className="movie-title">Nocturne</h3>
              <p className="movie-year">2024</p>
              <div className="movie-rating">
                <span className="star">★</span>
                <span className="rating-value">8.7</span>
              </div>
            </div>
          </div>
        </div>
      </div>

      <section className="movie-section">
        <h2 className="section-title">Coming Soon</h2>
        <div className="movie-grid" id="coming-soon">
          <div className="movie-card">
            <div className="movie-poster">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Dimension Drift"
              />
              <div className="movie-overlay">
                <button className="btn btn-outline btn-small">Coming Soon</button>
              </div>
            </div>
            <div className="movie-info">
              <h3 className="movie-title">Dimension Drift</h3>
              <p className="movie-year">2025</p>
              <div className="movie-rating">
                <span className="star">★</span>
                <span className="rating-value">--</span>
              </div>
            </div>
          </div>

          <div className="movie-card">
            <div className="movie-poster">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="The Crimson Path"
              />
              <div className="movie-overlay">
                <button className="btn btn-outline btn-small">Coming Soon</button>
              </div>
            </div>
            <div className="movie-info">
              <h3 className="movie-title">The Crimson Path</h3>
              <p className="movie-year">2025</p>
              <div className="movie-rating">
                <span className="star">★</span>
                <span className="rating-value">--</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
    {/* <!--End Main Content --> */}
    </div>
  )
}

export default mainSection

import React from 'react'

const main = () => {
  return (
    <div>
      {/* <!-- Start Search Results --> */}
    <div class="main-content">
      <section class="movie-section">
        <h2 class="section-title">
          Search Results <span class="results-count">(24)</span>
        </h2>
        <div class="movie-grid search-results">
        
          <div class="movie-card">
            <div class="movie-poster">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Quantum Shift"
              />
              <div class="movie-overlay">
                <button class="btn btn-primary btn-small">Watch Now</button>
              </div>
            </div>
            <div class="movie-info">
              <h3 class="movie-title">Quantum Shift</h3>
              <p class="movie-year">2023</p>
              <div class="movie-rating">
                <span class="star">★</span>
                <span class="rating-value">8.9</span>
              </div>
            </div>
          </div>

          <div class="movie-card">
            <div class="movie-poster">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Desert Storm"
              />
              <div class="movie-overlay">
                <button class="btn btn-primary btn-small">Watch Now</button>
              </div>
            </div>
            <div class="movie-info">
              <h3 class="movie-title">Desert Storm</h3>
              <p class="movie-year">2024</p>
              <div class="movie-rating">
                <span class="star">★</span>
                <span class="rating-value">7.6</span>
              </div>
            </div>
          </div>

          <div class="movie-card">
            <div class="movie-poster">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Ocean's Edge"
              />
              <div class="movie-overlay">
                <button class="btn btn-primary btn-small">Watch Now</button>
              </div>
            </div>
            <div class="movie-info">
              <h3 class="movie-title">Ocean's Edge</h3>
              <p class="movie-year">2023</p>
              <div class="movie-rating">
                <span class="star">★</span>
                <span class="rating-value">8.1</span>
              </div>
            </div>
          </div>

          <div class="movie-card">
            <div class="movie-poster">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Midnight Runner"
              />
              <div class="movie-overlay">
                <button class="btn btn-primary btn-small">Watch Now</button>
              </div>
            </div>
            <div class="movie-info">
              <h3 class="movie-title">Midnight Runner</h3>
              <p class="movie-year">2024</p>
              <div class="movie-rating">
                <span class="star">★</span>
                <span class="rating-value">7.9</span>
              </div>
            </div>
          </div>

          <div class="movie-card">
            <div class="movie-poster">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Crystal Kingdom"
              />
              <div class="movie-overlay">
                <button class="btn btn-primary btn-small">Watch Now</button>
              </div>
            </div>
            <div class="movie-info">
              <h3 class="movie-title">Crystal Kingdom</h3>
              <p class="movie-year">2023</p>
              <div class="movie-rating">
                <span class="star">★</span>
                <span class="rating-value">8.4</span>
              </div>
            </div>
          </div>

          <div class="movie-card">
            <div class="movie-poster">
              <img
                src="/placeholder.svg?height=400&width=300"
                alt="Steel Hearts"
              />
              <div class="movie-overlay">
                <button class="btn btn-primary btn-small">Watch Now</button>
              </div>
            </div>
            <div class="movie-info">
              <h3 class="movie-title">Steel Hearts</h3>
              <p class="movie-year">2024</p>
              <div class="movie-rating">
                <span class="star">★</span>
                <span class="rating-value">7.3</span>
              </div>
            </div>
          </div>
        </div>

        
        <div class="pagination">
          <button class="pagination-btn" disabled>←</button>
          <button class="pagination-btn active">1</button>
          <button class="pagination-btn">2</button>
          <button class="pagination-btn">3</button>
          <span class="pagination-dots">...</span>
          <button class="pagination-btn">8</button>
          <button class="pagination-btn">→</button>
        </div>
      </section>
    </div>
    {/* <!-- End Search Results --> */}
    </div>
  )
}

export default main

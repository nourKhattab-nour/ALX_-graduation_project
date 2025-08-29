import React from 'react'

const Footer = () => {
  return (
    <div>
      {/* <!-- Start Footer --> */}
    <footer className="footer">
      <div className="container">
        <div className="footer-content">

          <div className="footer-column">
            <div className="footer-logo">
              <div className="logo-icon">
                <div className="logo-square"></div>
              </div>
              <span className="logo-text">Cineverse</span>
            </div>
            <p className="footer-description">
              Your ultimate destination for discovering new and trending movies.
              Explore, watch, and create your personal watchlist.
            </p>
          </div>

          
          <div className="footer-column">
            <h3 className="footer-heading">Explore</h3>
            <ul className="footer-links">
              <li><a href="#">Trending</a></li>
              <li><a href="#">Upcoming</a></li>
              <li><a href="#">Top Rated</a></li>
            </ul>
          </div>

          
          <div className="footer-column">
            <h3 className="footer-heading">Company</h3>
            <ul className="footer-links">
              <li><a href="#">About Us</a></li>
              <li><a href="#">Careers</a></li>
              <li><a href="#">Contact</a></li>
            </ul>
          </div>

          
          <div className="footer-column">
            <h3 className="footer-heading">Legal</h3>
            <ul className="footer-links">
              <li><a href="#">Privacy Policy</a></li>
              <li><a href="#">Terms of Service</a></li>
            </ul>
          </div>
        </div>

        
        <div className="footer-bottom">
          <p>&copy; 2024 Cineverse. All rights reserved.</p>
        </div>
      </div>
    </footer>
    {/* <!-- End Start Footer --> */}
    </div>
  )
}

export default Footer

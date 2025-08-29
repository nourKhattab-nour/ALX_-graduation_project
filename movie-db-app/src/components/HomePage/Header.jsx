import React from 'react'
import { useNavigate } from "react-router-dom";

const Header = () => {

  const navigate = useNavigate();
  
  return (
    <div>
      {/* <!-- Start header Section --> */}
      <div className="header">
        <div className="container">
          <div className="header-content">
            <a href="/" className="logo">
              <div className="logo-icon">
                <div className="logo-square"></div>
              </div>
              <span className="logo-text">Cineverse</span>
            </a>

            <nav className="nav-menu">
              <a href="/" className="nav-link">
                Home
              </a>
              <a href="/search" className="nav-link">
                Search
              </a>
              {/* <a href="/wishlist" className="nav-link">
                My Watchlist
              </a> */}
            </nav>

            <div className="auth-buttons">
              <button
                className="btn btn-ghost"
                onClick={() => navigate("/login")}
              >
                Log In
              </button>
              <button
                className="btn btn-primary"
                onClick={() => navigate("/signup")}
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
      {/* <!-- End header Section --> */}
    </div>
  );
}

export default Header

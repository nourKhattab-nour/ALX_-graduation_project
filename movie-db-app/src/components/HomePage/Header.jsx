import React from "react";
import { useNavigate, Link } from "react-router-dom";

const Header = () => {
  const navigate = useNavigate();

  return (
    <div>
      {/* <!-- Start header Section --> */}
      <div className="header">
        <div className="container">
          <div className="header-content">
            <Link to="/" className="logo">
              <div className="logo-icon">
                <div className="logo-square"></div>
              </div>
              <span className="logo-text">Cineverse</span>
            </Link>

            <nav className="nav-menu">
              <Link to="/" className="nav-link">
                Home
              </Link>
              <Link to="/search" className="nav-link">
                Search
              </Link>
              {/* <Link to="/wishlist" className="nav-link">
                My Watchlist
              </Link> */}
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
};

export default Header;

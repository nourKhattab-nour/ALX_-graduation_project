import React from "react";

const HeroSection = () => {
  return (
    <div>
      {/* <!-- Start Hero Section --> */}
      <div className="hero">
        <div className="hero-background"></div>
        <div className="hero-overlay"></div>
        <div className="hero-content">
          <h1 className="hero-title">Galaxy Runners</h1>
          <p className="hero-description">
            In a universe on the brink of collapse, a renegade crew must pull
            off the most daring heist of all time.
          </p>
          <div className="hero-buttons">
            <button className="btn btn-primary btn-large">
              <span className="btn-icon">▶</span>
              Watch Trailer
            </button>
            <button className="btn btn-outline btn-large">
              <span className="btn-icon">ℹ</span>
              More Info
            </button>
          </div>
        </div>
      </div>
      {/* <!--End Hero Section --> */}
    </div>
  );
};

export default HeroSection;

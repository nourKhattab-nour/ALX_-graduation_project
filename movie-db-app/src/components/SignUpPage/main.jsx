import React from "react";
const Main = () => {
  return (
    <div>
      {/* Sign Up Form Section */}
      <div className="auth-main">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h1 className="auth-title">Join Cineverse</h1>
              <p className="auth-subtitle">
                Create your account to start exploring movies
              </p>
            </div>

            <form className="auth-form" id="signupForm">
              {/* Full Name */}
              <div className="form-group">
                <label htmlFor="fullName" className="form-label">
                  Full Name
                </label>
                <input
                  type="text"
                  id="fullName"
                  name="fullName"
                  className="form-input"
                  placeholder="Enter your full name"
                  required
                />
              </div>

              {/* Email */}
              <div className="form-group">
                <label htmlFor="email" className="form-label">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  className="form-input"
                  placeholder="Enter your email"
                  required
                />
              </div>

              {/* Password */}
              <div className="form-group">
                <label htmlFor="password" className="form-label">
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  name="password"
                  className="form-input"
                  placeholder="Create a password"
                  required
                />
              </div>

              {/* Confirm Password */}
              <div className="form-group">
                <label htmlFor="confirmPassword" className="form-label">
                  Confirm Password
                </label>
                <input
                  type="password"
                  id="confirmPassword"
                  name="confirmPassword"
                  className="form-input"
                  placeholder="Confirm your password"
                  required
                />
              </div>

              {/* Terms Checkbox */}
              <div className="form-options">
                <label className="checkbox-label">
                  <input type="checkbox" id="terms" name="terms" required />
                  <span className="checkbox-text">
                    I agree to the{" "}
                    <a href="#" className="auth-link">
                      Terms of Service
                    </a>{" "}
                    and{" "}
                    <a href="#" className="auth-link">
                      Privacy Policy
                    </a>
                  </span>
                </label>
              </div>

              {/* Submit Button */}
              <button type="submit" className="btn btn-primary btn-full">
                Create Account
              </button>
            </form>

            {/* Footer */}
            <div className="auth-footer">
              <p className="auth-switch">
                Already have an account?{" "}
                <a href="login.html" className="auth-link">
                  Sign in here
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Main;

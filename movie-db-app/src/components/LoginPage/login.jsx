import React from 'react'

const login = () => {
  return (
    <div>
      {/* <!-- Start Login Form Section --> */}
    <div class="auth-main">
      <div class="auth-container">
        <div class="auth-card">
          <div class="auth-header">
            <h1 class="auth-title">Welcome Back</h1>
            <p class="auth-subtitle">Sign in to your Cineverse account</p>
          </div>

          <form class="auth-form" id="loginForm">
    
            <div class="form-group">
              <label for="email" class="form-label">Email Address</label>
              <input
                type="email"
                id="email"
                name="email"
                class="form-input"
                placeholder="Enter your email"
                required
              />
            </div>

          
            <div class="form-group">
              <label for="password" class="form-label">Password</label>
              <input
                type="password"
                id="password"
                name="password"
                class="form-input"
                placeholder="Enter your password"
                required
              />
            </div>

    
            <div class="form-options">
              <label class="checkbox-label">
                <input type="checkbox" id="remember" name="remember" />
                <span class="checkbox-text">Remember me</span>
              </label>
              <a href="#" class="forgot-password">Forgot password?</a>
            </div>

           
            <button type="submit" class="btn btn-primary btn-full">
              Sign In
            </button>
          </form>

          
          <div class="auth-footer">
            <p class="auth-switch">
              Don't have an account?
              <a href="signup.html" class="auth-link">Sign up here</a>
            </p>
          </div>
        </div>
      </div>
    </div>
    {/* <!-- End Login Form Section --> */}
    </div>
  )
}

export default login

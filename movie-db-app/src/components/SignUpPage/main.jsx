import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import Header from "../HomePage/Header";
import Footer from "../Footer/Footer";
import authService from "../../services/authService";

const main = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    fullName: "",
    email: "",
    password: "",
    confirmPassword: "",
    terms: false,
  });
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: type === "checkbox" ? checked : value,
    }));
    
    if (error) setError("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError("");

    try {
      
      if (!formData.terms) {
        throw new Error(
          "Please accept the Terms of Service and Privacy Policy"
        );
      }

      const result = authService.register(formData);
      console.log("[v0] Registration successful:", result);

     
      navigate("/login");
    } catch (err) {
      console.log("[v0] Registration error:", err.message);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <Header />

    
      <div className="auth-main">
        <div className="auth-container">
          <div className="auth-card">
            <div className="auth-header">
              <h1 className="auth-title">Join Cineverse</h1>
              <p className="auth-subtitle">
                Create your account to start exploring movies
              </p>
            </div>

            {error && (
              <div
                className="error-message"
                style={{
                  background: "#fee2e2",
                  color: "#dc2626",
                  padding: "12px",
                  borderRadius: "8px",
                  marginBottom: "20px",
                  textAlign: "center",
                }}
              >
                {error}
              </div>
            )}

            <form className="auth-form" onSubmit={handleSubmit}>
             
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
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                />
              </div>

         
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
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>

              
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
                  value={formData.password}
                  onChange={handleChange}
                  required
                />
              </div>

           
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
                  value={formData.confirmPassword}
                  onChange={handleChange}
                  required
                />
              </div>

              
              <div className="form-options">
                <label className="checkbox-label">
                  <input
                    type="checkbox"
                    id="terms"
                    name="terms"
                    checked={formData.terms}
                    onChange={handleChange}
                    required
                  />
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

              
              <button
                type="submit"
                className="btn btn-primary btn-full"
                disabled={loading}
              >
                {loading ? "Creating Account..." : "Create Account"}
              </button>
            </form>

           
            <div className="auth-footer">
              <p className="auth-switch">
                Already have an account?{" "}
                <Link to="/login" className="auth-link">
                  Sign in here
                </Link>
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default main;

import React, { useState, useContext } from "react";
import { FaEye, FaEyeSlash, FaGoogle } from "react-icons/fa";
import Header from "../components/header";
import { Link } from "react-router-dom";
import { useTheme } from "../context/themeContext";
import authContext from "../context/authContext";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"; // Toastify styles

export default function Register() {
  const { theme } = useTheme();
  const { signUp } = useContext(authContext);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [showPassword, setShowPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  // Email validation regex
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const validateForm = () => {
    const { name, email, password, confirmPassword } = formData;
    if (!name || !email || !password || !confirmPassword) {
      toast.error("All fields are required.");
      return false;
    }
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address.");
      return false;
    }
    if (password !== confirmPassword) {
      toast.error("Passwords must match.");
      return false;
    }
    if (password.length < 6) {
      toast.error("Password must be at least 6 characters long.");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsLoading(true);
    try {
      await signUp(formData.name, formData.email, formData.password);
      toast.success("Sign-Up Successful!");
      setFormData({
        name: "",
        email: "",
        password: "",
        confirmPassword: "",
      });
    } catch (err) {
      toast.error(err.message || "An unexpected error occurred.");
    } finally {
      setIsLoading(false);
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleConfirmPasswordVisibility = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  return (
    <>
      <Header />
      <form className={`user ${theme}`} onSubmit={handleSubmit}>
        <img src="images/signup.svg" alt="Register logo" />

        {/* Name Input */}
        <input
          type="text"
          name="name"
          value={formData.name}
          onChange={handleInputChange}
          placeholder="Full Name"
          className="inputStyle"
        />

        {/* Email Input */}
        <input
          type="email"
          name="email"
          value={formData.email}
          onChange={handleInputChange}
          placeholder="johndoe@gmail.com"
          className="inputStyle"
        />

        {/* Password Input */}
        <div className="password-container">
          <input
            type={showPassword ? "text" : "password"}
            name="password"
            value={formData.password}
            onChange={handleInputChange}
            placeholder="Password"
            className="inputStyle"
          />
          <button type="button" className="eye" onClick={togglePasswordVisibility}>
            {showPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Confirm Password Input */}
        <div className="password-container">
          <input
            type={showConfirmPassword ? "text" : "password"}
            name="confirmPassword"
            value={formData.confirmPassword}
            onChange={handleInputChange}
            placeholder="Confirm Password"
            className="inputStyle"
          />
          <button type="button" className="eye" onClick={toggleConfirmPasswordVisibility}>
            {showConfirmPassword ? <FaEyeSlash /> : <FaEye />}
          </button>
        </div>

        {/* Submit Button */}
        <input
          type="submit"
          value={isLoading ? "Processing..." : "Register"}
          className={`inputStyle btn ${isLoading ? "loading" : ""}`}
          disabled={isLoading}
        />

        <div className="lines">
          <div className="line one">
            <Link to="/login" className="linked">
              Account? Login
            </Link>
          </div>
          <div className="line two">OR</div>
        </div>

        {/* Google Login Button */}
        <button type="button" className="inputStyle google">
          <FaGoogle /> &nbsp; Sign Up with Google
        </button>

        <div className="term">
          <p>
            By signing up you acknowledge that you agree to our{" "}
            <Link to="/terms" className="linked">
              Terms of use
            </Link>{" "}
            and{" "}
            <Link to="/privacy" className="linked">
              Privacy policy.
            </Link>
          </p>
        </div>
      </form>
    </>
  );
}

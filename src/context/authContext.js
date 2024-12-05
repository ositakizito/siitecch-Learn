// authContext.js
import React, { createContext, useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import api from "../utils/api"; // Import the Axios instance from utils.js
import { toast } from "react-toastify";

// Create the AuthContext
const authContext = createContext();

export const AuthProvider = ({ children }) => {
  // State to store user data and authentication status
  const [user, setUser] = useState(null);
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [loading, setLoading] = useState(true); // To handle loading state while checking user

  const navigate = useNavigate();

  // Check if the user is already authenticated (check JWT or session in localStorage)
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      setUser({ name: "John Doe", email: "johndoe@gmail.com" }); // Example
      setIsAuthenticated(true);
    }
    setLoading(false); // After checking, stop the loading
  }, []);

  const signUp = async (name, email, password) => {
    try {
      const response = await api.post("http://localhost:5000/api/auth/signup", {
        name,
        email,
        password,
      });
      toast.success(response.data.message);  // Show success message
      setIsAuthenticated(true);  // Set user as authenticated
      setUser({ email });  // Set the user in context or state
      localStorage.setItem("token", response.data.token);  // Save token
      navigate("/profile");  // Redirect to profile page
    } catch (error) {
      toast.error(error.response?.data.message || "Something went wrong!");
    }
  };


  // Login function
  const login = async (email, password) => {
    try {
      const response = await api.post("/login", { email, password });
      const data = response.data;

      if (response.status === 200) {
        // Save the token in localStorage
        localStorage.setItem("token", data.token);
        setUser(data.user); // Save the user data
        setIsAuthenticated(true);
        navigate("/dashboard"); // Redirect to a secure page after login
      } else {
        throw new Error(data.message || "Login failed");
      }
    } catch (error) {
      console.error("Login failed", error);
    }
  };

  // Logout function
  const logout = () => {
    localStorage.removeItem("token"); // Remove token from localStorage
    setUser(null); // Clear user data
    setIsAuthenticated(false); // Set authentication status to false
    navigate("/login"); // Redirect to the login page
  };

  // Context value to be shared
  const contextValue = {
    user,
    isAuthenticated,
    signUp,
    login,
    logout,
    loading,
  };

  return (
    <authContext.Provider value={contextValue}>
      {children}
    </authContext.Provider>
  );
};

export default authContext;

import React from 'react';
import { Navigate } from 'react-router-dom';
import { useContext } from 'react';
import authContext from '../context/authContext';

const ProtectedRoute = ({ children }) => {
  const { isAuthenticated, loading } = useContext(authContext);

  if (loading) return <p>Loading...</p>; // Optional loading state
  if (!isAuthenticated) return <Navigate to="/login" />; // Redirect if not authenticated

  return children;
};

export default ProtectedRoute;

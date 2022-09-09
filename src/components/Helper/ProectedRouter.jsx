import React from 'react';
import { UserContext } from '../../useContext';
import { Navigate } from 'react-router-dom';

const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext(UserContext);
  return login ? children : <Navigate to="/Insta-dog/Loguin" />;
};

export default ProtectedRoute;
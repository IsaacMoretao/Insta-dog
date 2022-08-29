import React from 'react';
import { Navigate } from 'react-router';
import { UserContext } from '../../useContext';

export const ProtectedRoute = ({ children }) => {
  const { login } = React.useContext( UserContext );
  return login ? (

    children

  ) : (

    <Navigate to={'/istadog/Loguin'}/>

  )

}


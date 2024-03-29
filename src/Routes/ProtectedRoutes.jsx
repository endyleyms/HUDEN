import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuthContext } from '../Hooks/useAuthContext';

function ProtectedRoutes() {
  const {user}= useAuthContext();
  const isLogged = true;

  return isLogged ? <Outlet /> : <Navigate to="/" />;
}

export default ProtectedRoutes;

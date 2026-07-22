import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    let isLogged = localStorage.getItem("userRole") ;

  return  isLogged === 'admin' || isLogged === "user" 
  ? <Outlet/> 
  : <Navigate to='/login' replace/>;
}

export default ProtectedRoute
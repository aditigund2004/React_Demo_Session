import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRoute = () => {

    let isLogged = JSON.stringify(localStorage.getItem("userRole") );

  // return  isLogged === 'admin' || isLogged === "user" 
  // ? <Outlet/> 
  // : <Navigate to='/login' replace/>;

  return isLogged ? <Outlet/> : <Navigate  to='/login' />
}

export default ProtectedRoute
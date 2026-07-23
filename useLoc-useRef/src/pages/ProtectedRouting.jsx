import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const ProtectedRouting = () => {

    const isLogged = JSON.stringify(localStorage.getItem("userRole"));


  return isLogged ? <Outlet/> : <Navigate to = '/login' replace/>
  
}

export default ProtectedRouting

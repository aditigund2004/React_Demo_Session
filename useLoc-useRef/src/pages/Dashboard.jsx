import React from 'react'
import { useLocation, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  const location = useLocation()

  const handleLogout = ()=>{
    localStorage.removeItem("useRole")

    Navigate('/logim')
  }

  const userlog = JSON.stringify(localStorage.getItem("userRole"))

  return (
    <div>
        <center>
            <h2>Dashboard</h2>

            <p>Name: {userlog.name}</p>
            <p>Name: {userlog.role}</p>
            <p>Name: {userlog.email}</p>

            <button onClick={handleLogout}>Logout</button>

        </center>
      
    </div>
  )
}

export default Dashboard

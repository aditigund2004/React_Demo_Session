import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('userRole')
    navigate('/login')
  }

  const userLog = JSON.parse(localStorage.getItem("userRole"))

  return (
    <div>
      <h2>Wlecome To Dashboard : </h2>  <br /><br />

{/* 
      <p>name: {location.state.user.name}</p>
      <p>name: {location.state.user.role}</p>
      <p>name: {location.state.user.email}</p> */}

      <p>name: {userLog.name}</p>
      <p>name: {userLog.role}</p>
      <p>name: {userLog.email}</p>


      <br></br>

      <button onClick={handleLogout}>Logout</button>
    </div>

  )
}

export default Dashboard
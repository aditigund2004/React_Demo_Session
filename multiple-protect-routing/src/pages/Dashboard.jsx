import React from 'react'
import { NavLink, useNavigate } from 'react-router-dom'

const Dashboard = () => {

  const navigate = useNavigate()

  const handleLogout = () => {
    localStorage.removeItem('userRole')
    navigate('/login')
  }

  return (
    <div>
      <h2>Wlecome To Dashboard : {localStorage.getItem("userRole")}</h2>
      <br /><br />
      <button onClick={handleLogout}>Logout</button>
    </div>

  )
}

export default Dashboard
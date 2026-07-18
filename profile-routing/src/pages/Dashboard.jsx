import React from 'react'
import { NavLink, Outlet, useNavigate } from 'react-router-dom'

const Dashboard = () => {

    const nav = useNavigate();

    const handleLogout =()=>{
        nav('/login')
        localStorage.removeItem('islogin')

    }
  return (
    <div>
      <center>
        <h2>Welcome to Dashboard</h2>

       <NavLink to='profile'> Profile</NavLink> { "  |  "}
       <NavLink to='profilesetting'> ProfileSetting</NavLink>{ "  |  "}
       <button onClick={handleLogout}>LogOut</button>
       <Outlet/>


        
      </center>
    </div>
  )
}

export default Dashboard

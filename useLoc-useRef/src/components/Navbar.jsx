import React from 'react'

const Navbar = () => {
  return (
    <div>
        <nav>

            <NavLink to='login'>Login</NavLink>
            <NavLink to='dashboard'>Dashboard</NavLink>
            <NavLink to='profile'>Profile</NavLink>
            <NavLink to='settings'>Settings</NavLink>
            
        </nav>
      
    </div>
  )
}

export default Navbar

import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>
      
      <NavLink>
        <Link to='/'>Homepage</Link> {" | "}
        <Link to='mobiles'>Mobiles</Link> {" | "}
        <Link to='fashion'>Fashion</Link> {" | "}
        <Link to='electronics'>Electronics</Link> {" | "}
        <Link to='login'>Login</Link> {" | "}
        
      </NavLink>
    </div>
  )
}

export default Navbar

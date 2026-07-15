import React from 'react'
import { Link, NavLink } from 'react-router-dom'

const Navbar = () => {
  return (
    <div>

        <NavLink>
            <Link to = '/'>Home Page</Link> { " | "}
            <Link to = 'mobiles'>Mobile page</Link>{ " | "}
            <Link to = 'electronics'>Electronics Page</Link>{ " | "}
            <Link to = 'kids'>Kids Page</Link>{ " | "}
            <Link to = 'fashion'>Fashion Page</Link>


        </NavLink>
      
    </div>
  )
}

export default Navbar

import React from 'react'

const Dashboard = ({user}) => {
  // props user to check user or admin 

  //  if not login then login and check whether user or admin
  // if user is not admin or user then first check 
   if (!user) {
    return <p>Please login first</p>
  }

  return (

    <div>
        <h2>Welcome</h2>
      <p>{user.role === "admin" ? "Admin Dashboard" : "User Dashboard"}</p>
    </div>
  )
}

export default Dashboard

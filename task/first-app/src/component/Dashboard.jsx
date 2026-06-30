import React from 'react'

const Dashboard = ({checkValid}) => {
    if (!checkValid){
        return <p>please login first</p>
        
    }
  return (
    <>
        <h2>Welcome</h2>
        <p>{checkValid.role ==='admin' ? 'Admin dashboard' : 'User Dashboard'}</p>
      
    </>
  )
}

export default Dashboard

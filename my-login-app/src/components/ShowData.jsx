import React from 'react'

const ShowData = () => {
  return (
    <div>
        <table border='2'>
            <tbody>
                <tr>
                    <th>Name</th>
                    <th>Role</th>
                    <th>Email</th>
                </tr>
            </tbody>
            {
                alluser.map ( (user)=>(
                    <tr>
                        <td>{user.name}</td>
                        <td>{user.role}</td>
                        <td>{user.email}</td>
                    </tr>

                ))
            }
        </table>
      
    </div>
  )
}

export default ShowData


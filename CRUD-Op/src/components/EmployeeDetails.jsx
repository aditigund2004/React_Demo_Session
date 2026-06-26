import React, { useState } from 'react'

const EmployeeDetails = ({childToParent}) => {

    const[del, setDel] = useState(0)

  return (
    <div>
        <table border='3' cellPadding='5'>
            <thead>
                <tr>
                    <th>Id</th>
                    <th>Name</th>
                    <th>Salary</th>
                    <th>department</th>
                    <th>Action</th>
                </tr>
            </thead>
            
                <tbody>
                    {
                childToParent?.map( (ed) => (
                    <tr key={ed.id}>
                        <td>{ed.id}</td>
                        <td>{ed.name}</td>
                        <td>{ed.salary}</td>
                        <td>{ed.dept}</td>
                        <td>
                            <button onClick={() => setDel(del)}>Delete</button>
                        </td>
                    </tr>
                    ))}
                </tbody>
            
        </table>
      
    </div>
  )
}

export default EmployeeDetails

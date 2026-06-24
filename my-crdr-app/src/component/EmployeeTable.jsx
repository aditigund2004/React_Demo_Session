import React, { useState } from 'react'

const EmployeeTable = ({sendUpdate}) => {
    // sendUpdate is a props function to send data from child comp to parent

  return (
    <div>
        <table border='2' cellPadding='4'> 
            <thead>
                <tr>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        {/* pass props as function to onclick event */}
                        <button onClick={() => sendUpdate(true)}>Update</button>
                    </td>
                </tr>
            </tbody>
        </table>
      
    </div>
  )
}

export default EmployeeTable

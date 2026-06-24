import React from 'react'

const EmployeeTable = ({SendUpdateData}) => {
  return (
    <div>
        <table>
            <thead>
                <tr>
                    <th>
                        Action
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr>
                    <td>
                        <button onClick={() => SendUpdateData(true)}>Update</button>
                    </td>
                </tr>
            </tbody>
        </table>
      
    </div>
  )
}

export default EmployeeTable

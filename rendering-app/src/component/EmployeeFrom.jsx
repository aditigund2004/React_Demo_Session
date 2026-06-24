import React from 'react'

const EmployeeFrom = ({sendEmp}) => {
  return (
    <div>
        <h2>{!sendEmp ? "Add Employee form" : "Update Employee form"}</h2>
      
    </div>
  )
}

export default EmployeeFrom

import React, { useState } from 'react'

const EmployeeFrom = ({sendEmp}) => {

  return (
    <div>
        <h3>{!sendEmp ? "Add Employee Form" : "Update Employee Form"}</h3>

        <br></br><br></br>
      
    </div>

  )
}

export default EmployeeFrom

import React, { useState } from 'react'
import EmployeeFrom from './components/EmployeeFrom'
import EmployeeDetails from './components/EmployeeDetails'

const App = () => {

  const [empData, setEmpData] = useState([])

  const sendData = (dt) => {
    setEmpData([...empData, dt])
  }

  return (
    <div>
      <center>
        <h1>CRUD Operation</h1>
        {/* function  -> sendData adding the data inside it */}
        {/* parent to child as a function  */}
        {/* parent create props pass to app and then app create function  */}
        <EmployeeFrom sendDataToParent = {sendData}/>

        {/* child calss function (data) parent receive data */}
        {/* pass state variable name and also functon  */}
        {/* create props pass to child to in that props name pass state vriable */}
        <EmployeeDetails childToParent = {empData}/>
      </center>
      
    </div>
  )
}

export default App


/* 
App
 │
 │ EmpData={receiveData}
 ▼
EmployeeForm

*/


/* 
App
 │
 │ receiveEmp={empData}
 ▼
EmployeeDetails

*/


/* 

Parent
   │
   │ function as prop
   ▼
Child
   │
   │ calls function(data)
   ▲
Parent receives data*/


/* 

The parent passes a function to the child as a prop.
The child calls that function, optionally passing a state variable (or any value) as an argument.
The parent receives that value and can update its own state.
*/
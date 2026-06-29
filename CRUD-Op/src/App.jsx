import React, { useState } from 'react'
import EmployeeFrom from './components/EmployeeFrom'
import EmployeeDetails from './components/EmployeeDetails'

const App = () => {

  const [empData, setEmpData] = useState([])

  const [update, setUpdate] = useState(null)

  // const sendData = (dt) => {
  //   setEmpData([...empData, dt])
  // }

  // prev means: the previous (latest) state value of empData

  const sendData = (dt) => {
  setEmpData((prev) => {
    const exists = prev.find(e => e.id === dt.id)

    if (exists) {
      // UPDATE
      return prev.map(e =>
        e.id === dt.id ? dt : e
      )
    } else {
      // ADD
      return [...prev, dt]
    }
  })

  setUpdate(null) // reset edit mode
}



  const deleteEmployee = (id)=>{
    setEmpData(empData.filter(emp => emp.id !== id))
  }


  const handleUpdatePa = (e) => {
    setUpdate(e)
  }
  

  return (
    <div>
      <center>
        <h1>CRUD Operation</h1>
        {/* function  -> sendData adding the data inside it */}
        {/* parent to child as a function  */}
        {/* parent create props pass to app and then app create function  */}

        {/* To send data up → we use function */}
        {/* Child (EmployeeFrom) wants to send data UP to parent (App) */}
        <EmployeeFrom sendDataToParent = {sendData} up = {update}/>


        {/* Why function is required? */}
        {/* Child CANNOT directly change parent state */}
        {/* 
        Only parent can update its own state
        So parent gives child a "tool" (function) to request update.
         */}

        {/* child calss function (data) parent receive data */}
        {/* pass state variable name and also functon  */}
        {/* create props pass to child to in that props name pass state vriable */}
        <EmployeeDetails childToParent = {empData} onDelete = {deleteEmployee} onUpdate = {handleUpdatePa}/>
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
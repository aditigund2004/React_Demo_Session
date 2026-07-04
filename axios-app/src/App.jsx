import React, { useState } from 'react'
import Navbar from './components/Navbar'
import EmployeeForm from './pages/EmployeeForm'
import EmployeeDetails from './pages/EmployeeDetails'

const App = () => {
   let [employees, setEmployees] = useState([])

 let [emp, setEmp] = useState(null)

  let [refresh, setRefresh] = useState(0)

  const receive = (emp)=>{
    setEmp(emp)

  }


  return (
    <div>
      <h1>Axios App</h1>
      <Navbar/>

      <EmployeeForm setRef={(e)=>{setRefresh(refresh+e) , setEmp(null)}} accepEmp={emp}/>

      <EmployeeDetails reload={refresh} sendEmp={(e)=>setEmp(e)}/>
      
    </div>
  )
}

export default App


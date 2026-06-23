import React, { useState } from 'react'
import './App.css'
import EmloyeeDetail from './component/EmloyeeDetail'

const App = () => {

  const [emp, setEmpt] = useState({empname:'', empid:'', empsalary: ''})

  // empty array to store data inside 
  const [epm, setEpm] = useState([]);

  const handleSubmit =(e) => {
    e.preventDefault()
    console.log(emp)

    setEpm([...epm, emp]);

    setEmpt({
    empname: '',
    empid: '',
    empsalary: ''
  });
    // after entering data and click submit make input filed empty
    setEmpt({empname:'', empid:'', empsalary: ''})

    
    // const cfm = confirm("do you Want to Add these Employee Details")
    // console.log(cfm)
  }


  const handleChange =(e) =>{
    // name and values from input filed

    const {name, value} = e.target

    setEmpt({...emp, [name]: value})

  }

  return (
    <div  className="app-container">
      <center>
        <h1>Employee Datils</h1>
        <form onSubmit={handleSubmit}>
          {/* parent comp and propes  */}
        Enployee Name: <input type = 'text' name = 'empname' value = {emp.empname} onChange={handleChange} required/><br></br><br></br>
        Enployee Id: <input type = 'text' name = 'empid' value = {emp.empid} onChange={handleChange} required/><br></br><br></br>
        Enployee Salary: <input type = 'text' name = 'empsalary' value = {emp.empsalary} onChange={handleChange} required/><br></br><br></br>

        <button type='submit'> Add Employee</button>
        </form>
      </center>
      {/* pass variable as propes 
      const [epm, setEpm] = useState([]);
      
      variable are written inside {} */}
      <EmloyeeDetail ep={epm}/>
      {/* ep -> props name  and epm -> is new array to adote value or data*/}
      {/* send data to child comp or prope ep */}
      
    </div>
  )
}

export default App

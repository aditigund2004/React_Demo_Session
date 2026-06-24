import React, { useState } from 'react'
import EmployeeFrom from './component/EmployeeFrom'
import EmployeeTable from './component/EmployeeTable'

const App = () => {

  let [actice, setActive] = useState(false)

  let [pass, setPass] = useState(false)

  let [update, setUpdate] = useState(false)

  return (
    <div>
      <center>
        <h1>Conditional Rendering</h1>

      <h3>Active Status : {!actice ? "online" : "offline"}</h3>

      <button onClick={() => setActive(!actice)}> {!actice ? "Login" : "Logout"}</button>
      <br></br><br></br>

      Password: <input type = {!pass ? "password": "text"} /><br></br><br></br>

      <button onClick={() => setPass(!pass)}>{!pass ? "🫣" : " 👁️"}</button>



      <EmployeeFrom sendEmp = {update}/>


      <EmployeeTable sendUpdate = { (e) => setUpdate(e)}/>


      
      </center>
    </div>
  )
}

export default App

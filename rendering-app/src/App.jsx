import React, { useState } from 'react'
import EmployeeFrom from './component/EmployeeFrom'
import EmployeeTable from './component/EmployeeTable'

const App = () => {

  const [active, setActive] = useState(false)

  const [pass, setPass] = useState(false)

  let [update, setUpdateData] = useState(false)

  // const active = false
  // console.log(active)
  return (
    <div>

      <center>
        <h2>active status: {!active ? "online" : "Offline"}</h2>

      <button type = 'submit' onClick={() => setActive(!active)}>{!active ? "login" : "logout"}</button>
      <br></br>
      <br></br>


      Enter Password: <input type= {!pass ? 'password' : 'text'} />
      <br></br><br></br>
      <button onClick={()=> setPass(!pass)}>{!pass ? 'show password' : 'hide password'}</button>

      
      <EmployeeFrom sendEmp = {update}/>
      <EmployeeTable SendUpdateData= {setUpdateData}/>
      </center>
      
    </div>
  )
}

export default App

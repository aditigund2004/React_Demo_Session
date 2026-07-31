import React, { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import Login from './pages/Login'
import BankerDashboard from './pages/BankerDashboard'
import CustomerDashbaord from './pages/CustomerDashbaord'

const App = () => {
  const [logger, setlogger] = useState(null)

  const handleLogin = (e)=>{
    console.log("add buttn clicked...")
    setlogger(e)
  }
  return (
    <div>
      <center>
        <Routes>
          <Route path='/bankdashboard' element={<BankerDashboard/>}/>
          <Route path='/custdashboard' element={<CustomerDashbaord/>}/>
        </Routes>
        
        <button onClick={()=>handleLogin('banker')} >Login as a Banker</button> <br /> <br />
        <button onClick={()=>handleLogin('cust')} >Login as a Customer</button>
        {
          logger && (
            <Login whologin={logger}/>
          )
        }
        
      </center>
    </div>
  )
}
export default App
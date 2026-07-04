import React, { useState } from 'react'
import StudentData from './components/StudentData'
import StudentRegister from './components/StudentRegister'

const App = () => {

  const [data, setData] = useState([])
      const receive = (dt)=>{
        setData(dt)      
    }
  return (

    <div>
      <center>
        <h1>Student Registration App</h1>

        <StudentRegister sendData={receive}/>

        <StudentData receiveTo = {data}/>
        
      </center>
      
    </div>
  )
}

export default App

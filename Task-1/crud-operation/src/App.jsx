import React, { useState } from 'react'
import ShowEmp from './components/ShowEmp'
import AddEmp from './components/AddEmp'

const App = () => {
  const[data, setData] = useState( [])
  const func =(dt)=>[
    setData(dt)
  ]
  return (
    <div>
      <center>
        <h3>CRUD OPERATION</h3>
        {/* <ShowData/> */}
        {/* <Data/> */}
        <AddEmp sendData = {func}/>
        <ShowEmp receive = {data}/>
      </center>
      
    </div>
  )
}

export default App

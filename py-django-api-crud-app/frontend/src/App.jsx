import axios from 'axios'
import React, { useState } from 'react'
import ShowTable from './ShowTable'
import ShowEmp from './ShowEmp'

const App = () => {

  const [add, setAdd] = useState(null)
  const [sendUpdate, setSendUpdate] = useState(null)

  return (
    <div>

      <ShowEmp  add = {(e)=>  setAdd(add+e)} receiveUpdate={sendUpdate}/>

      <ShowTable refresh = {add} handleUpdate= {(e) => setSendUpdate(e)}/>
      
    </div>
  )
}

export default App

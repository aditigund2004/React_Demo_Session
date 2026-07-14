import React, { useState } from 'react'
import ShowEmp from './components/ShowEmp'
import AddEmp from './components/AddEmp'

const App = () => {
  const [ref, setRef] = useState(0)

  const[update, setUpdate]=useState(null)

  const updatedFun =(up)=>{
    setUpdate(up)

  }

  return (
    <div>
      <center>
        <h3>CRUD OPERATION</h3>
        {/* <ShowData/> */}
        {/* <Data/> */}
        <AddEmp  refdata={ref} setRef = {setRef} updateRec = {update}/>
        <ShowEmp refdata={ref} updateData ={updatedFun}/>
      </center>
      
    </div>
  )
}

export default App

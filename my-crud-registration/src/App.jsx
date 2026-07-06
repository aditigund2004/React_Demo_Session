import React, { useState } from 'react'
import StudentData from './components/StudentData'
import StudentRegister from './components/StudentRegister'

const App = () => {
  const [stud, setStud] = useState([])
  const [refresh,setRefresh]=useState(false)

  const update=(student)=>{
    setStud(student)

  }

  const reload = ()=>{
    setRefresh(!refresh)
  }
  return (
    <div>
      <center>
        <StudentRegister Recive = {stud} reload={reload}/>
        <StudentData EditTo={update} setRefresh={refresh}/>
      </center>
      
    </div>
  )
}

export default App

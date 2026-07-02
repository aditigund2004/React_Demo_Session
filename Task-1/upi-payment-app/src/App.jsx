import React, { useState } from 'react'
import UpiPayment from './components/UpiPayment'
import ShowData from './components/ShowData'


const App = () => {
  const [data, setData] = useState(false)

  const receiveData =(data)=>{
    setData(data)
  }
  return (
    <div>
      <center>
        <h1>UPI Payment App</h1>
        
      <UpiPayment sendData={ (ui)=> setData(!data)}/>

      <ShowData recData={data}/>
      </center>
      
    </div>
  )
}

export default App

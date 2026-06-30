import React, { useState } from 'react'
import HotelForm from './component/HotelForm'
import HotelDetailsTable from './component/HotelDetailsTable'

const App = () => {

  const [receive, setReceive] = useState([])

  const receiveInfo= (data) =>{
    setReceive([...receive, data])
   



  }
  return (
    <div>
      <center>
        <HotelForm info={receiveInfo}/>


        <HotelDetailsTable collectInfo = {receive}/>

      </center>
      
    </div>
  )
}

export default App

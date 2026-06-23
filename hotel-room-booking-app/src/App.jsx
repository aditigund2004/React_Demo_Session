import React, { useState } from 'react'
import HotelForm from './component/HotelForm'
import HotelDetailsForm from './component/HotelDetailsForm'

const App = () => {
  
  const [receive, setResceive] = useState([])

  const receiveFrom  =(data)=> {
    //  receive dat from hotelform.jsx to app and then pass to hoteldetaltable.jsx ->
    // setResceive -> variable name and parent usesate variable name
    setResceive([...receive, data])
  }

  const receiveDeletedId = (bookingid) =>{
    const updatedlist = receive.filter((iteam) => iteam.bookingid!==bookingid)
    setResceive(updatedlist)

  }
  return (
    <div>
      <center>
        {/* props name info in the HotelFrom.jsx amd pass the receiveFrom function */}
        <HotelForm info={receiveFrom}/>


        {/* revice data in usesate to set data dynamic data */}
        <HotelDetailsForm collectInfo ={receive} deletedId={receiveDeletedId}/>
      </center>
      
    </div>
  )
}

export default App

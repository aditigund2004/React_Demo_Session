import React, { useState } from 'react'
import TicketBooking from './components/TicketBooking'
import ShowTicket from './components/ShowTicket'

const App = () => {
  const [bdt, setDbt] = useState([])

  const receive = (info) =>{
    setDbt(info)

  }

  return (
    <div>
      <center>
        <h1>Book Movie Ticket</h1>

        <TicketBooking sendData={receive}/>

        <ShowTicket reciData = {bdt}/>
      </center>
      
    </div>
  )
}

export default App

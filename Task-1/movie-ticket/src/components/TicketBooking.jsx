import React, { useState } from 'react'
import { addDataAPI } from '../data'

const TicketBooking = ({sendData}) => {
    const [ticket, setTicket] = useState( { 
    userId: '',
    movie: '',
    theater: '',
    screen: '',
    seat: '',
    show: '',
    ticketNo: '',
    booking: '',
    payment: ''
  })

  const handelSubmit =(e)=>{
    e.preventDefault()
    setTicket( { 
    userId: '',
    movie: '',
    theater: '',
    screen: '',
    seat: '',
    show: '',
    ticketNo: '',
    booking: '',
    payment: ''
  })

  console.log(ticket)

  sendData(ticket)

  addDataAPI(ticket)

  }
  const handelInput = (e) =>{
    const {name, value} = e.target
    setTicket ({...ticket, [name]: value})

  }

  return (
    <div>
         <form onSubmit={handelSubmit}>

        UserId: <input type='text' name = 'userId' value={ticket.userId} onChange={handelInput} required/><br></br><br></br>
        movie: <input type='text' name = 'movie' value={ticket.movie} onChange={handelInput} required/><br></br><br></br>
        theater: <input type='text' name = 'theater' value={ticket.theater} onChange={handelInput} required/><br></br><br></br>
        screen: <input type='text' name = 'screen' value={ticket.screen} onChange={handelInput} required/><br></br><br></br>
        seat: <input type='text' name = 'seat' value={ticket.seat} onChange={handelInput} required/><br></br><br></br>
        show: <input type='text' name = 'show' value={ticket.show} onChange={handelInput} required/><br></br><br></br>
        ticketNo: <input type='text' name = 'ticketNo' value={ticket.ticketNo} onChange={handelInput} required/><br></br><br></br>
        payment: <input type='text' name = 'payment' value={ticket.payment} onChange={handelInput} required/><br></br><br></br>
       

        <button type='submit'>Add Ticket</button>
        </form>
      
    </div>
  )
}

export default TicketBooking

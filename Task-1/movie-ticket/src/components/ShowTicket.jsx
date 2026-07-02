import React, { useEffect, useState } from 'react'
import { addAPI, deleteAPI } from '../data'

const ShowTicket = ({reciData}) => {

  const [data, setData] = useState([])

  const [ref, setRef]= useState(null)

  const addData = ()=>{
    setData(addAPI())
  }

  useEffect ( () =>{
    setData(addAPI())

  },[ref, reciData])

  const handleDelete =(userId)=>{
    deleteAPI(userId)

    setRef(!ref)
  }
  return (
    <div>
      <table border='2'>
        <thead>
          <tr>
            <th>UserId</th>
            <th>movie</th>
            <th>theater Id</th>
            <th>screen</th>
            <th>seat</th>
            <th>show</th>
            <th>ticketNo</th>
            <th>Booking</th>
            <th>payment</th>
            <th>Action</th>
          
          </tr>
        </thead>
        <tbody>
          {
            data.map((recData) => (
            <tr key={recData.userId}>
              <td>{recData.userId}</td>
              <td>{recData.movie}</td>
              <td>{recData.theater}</td>
              <td>{recData.screen}</td>
              <td>{recData.seat}</td>
              <td>{recData.show}</td>
              <td>{recData.ticketNo}</td>
              <td>{recData.booking}</td>
              <td>{recData.payment}</td>
    
              <td>
                <button onClick={() => handleDelete(recData.userId)}>Delete</button>
              </td>
            </tr>
           ))} 
        </tbody>
      </table>

      
    </div>
  )
}

export default ShowTicket

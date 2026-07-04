import React, { useEffect, useState } from 'react'
import { addDataAPI, DeleteAPI } from '../data'

const Data = ({receive}) => {
    const [load, setLoad] = useState([])

    const [ref, setRef] = useState(null)

    const loadOrderData =()=>{
        setLoad(addDataAPI())

    }

    useEffect( ()=>{
        setLoad(addDataAPI())
    }, [ref,receive])

    const handleDelete =(userId)=>{
        DeleteAPI(userId)
         setLoad(addDataAPI()) // refresh immediately   
        setRef(!ref)
    }

  return (
    <div>
          <table border='2' cellPadding='3'>
        <thead>
          <tr>
            <th>UserId</th>
            <th>name</th>
            <th>address</th>
            <th>phone</th>
            <th>foodType</th>
            <th>totalQuantity</th>
            <th>Action</th>
          
          </tr>
        </thead>
        <tbody>
          {
            load.map((recData) => (
            <tr key={recData.userId}>
              <td>{recData.userId}</td>
              <td>{recData.uname}</td>
              <td>{recData.address}</td>
              <td>{recData.phone}</td>
              <td>{recData.foodType}</td>
              <td>{recData.totalQuantity}</td>
    
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

export default Data

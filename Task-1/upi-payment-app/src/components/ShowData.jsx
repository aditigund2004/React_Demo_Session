import React, { useEffect, useState } from 'react'
import { DeleteAPI, ShowAPI } from '../data'

const ShowData = ({recData}) => {
    const [bdata, setBData] = useState([])

    let [ref, setRef] = useState(null)

    
    const loadData = ()=> {
        setBData(ShowAPI())
    }

    useEffect( ()=> {
        loadData()
    },[ref, recData])

    const handleDelete = (id) => {
        DeleteAPI(id)
        setRef(!ref)
    }

  return (
    <div>
        <table border='2'>
        <thead>
          <tr>
            <th>UserId</th>
            <th>Name</th>
            <th>Transaction Id</th>
            <th>Payment Date</th>
            <th>Money</th>
            <th>Action</th>
          
          </tr>
        </thead>
        <tbody>
          {
            bdata.map((recData) => (
            <tr key={recData.id}>
              <td>{recData.id}</td>
              <td>{recData.uname}</td>
              <td>{recData.tid}</td>
              <td>{recData.paymentdate}</td>
              <td>{recData.money}</td>
    
              <td>
                <button onClick={() => handleDelete(recData.id)}>Delete</button>
              </td>
            </tr>
           ))} 
        </tbody>
      </table>

      
    </div>
  )
}

export default ShowData

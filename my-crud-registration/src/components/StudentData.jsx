import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StudentData = () => {
    const [data, setData] = useState([])

    const loadData= ()=>{
        axios.get('http://localhost:3000/Students')
        .then( (res)=>{
            setData(res.data)
        })
        .catch( (err) =>{
            console.log(err)
        })
    }

    const handleDelete =(id)=>{
        axios.delete(`http://localhost:3000/Students/${id}`)
        .then( (res) =>{
            setData(data)
        })
        .catch( (err) =>{
            console.log(err)
        })
    }

    useEffect(loadData, [data])

  return (
    <div>
        <center>
            <h2>Student Data</h2>
            <table border='2' cellPadding='4'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map( (d) => (  
                        <tr key={d.id}>
                            <td>{d.eid}</td>
                            <td>{d.uname}</td>
                            <td>
                                <button onClick={()=> handleDelete(d.id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </center>
      
    </div>
  )
}

export default StudentData

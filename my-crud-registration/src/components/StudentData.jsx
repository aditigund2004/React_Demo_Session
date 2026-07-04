import axios from 'axios'
import React, { useEffect, useState } from 'react'

const StudentData = ({receiveTo}) => {
    const [data, setData] = useState( [])

    const loadData = ()=>{
        axios.get('http://localhost:3000/Students')
        .then( (res)=>{
            setData(res.data)
        })
        .catch( (err) =>{
            console.log(err)
        })
    }

    const handleDelete= (id)=>{
        axios.delete(`http://localhost:3000/Students/${id}`)
        .then( (res) =>{
            console.log(res.data)
            loadData()
        })
        .catch( (err) =>{
            console.log(err)
        })

    }

    useEffect(loadData, [receiveTo])

  return (
    <div>
        <center>
            <table border = '3'>
                <thead>
                    <tr>
                        <th>Id</th>
                        <th>Name</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        data.map ( (d) => (
                        <tr key={d.id}>
                            <td>{d.eid}</td>
                            <td>{d.uname}</td>
                            <td>
                                <button type='text' onClick={()=> handleDelete(d.id)}>Delete</button>
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

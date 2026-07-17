import React, { useEffect, useState } from 'react'
import { deleteEmployee, showAllEmployee } from './services'

const ShowTable = ({refresh, handleUpdate}) => {
    const [emp , setEmp] = useState([])

    const loadEmp = ()=>{
        showAllEmployee().then( (res) =>{
            setEmp(res.data)
            console.log(res.data)
        })
        .catch( (err) =>{
            console.log(err)
          console.log("Status:", err.response?.status);
          console.log("Response:", err.response?.data);
            
        })
    }
    useEffect( ()=>{
        loadEmp()
    }, [refresh])

    const handleDelete = async (id)=>{
        const res = await deleteEmployee(id)

        loadEmp()
    }
  return (
    <div>
        <center>
            <h2>Employee Data</h2>
        <table border ='3'> 
            <thead>
                <tr>
                    {/* <th>id</th> */}
                    <th>name</th>
                    <th>role</th>
                    <th>salary</th>
                    <th>Action</th>
                    <th>Action</th>
                </tr>
            </thead>
            <tbody>          
                  {
                emp.map( (u)=> (
                    <tr key = {u.id}>
                        {/* <td>{u.id}</td> */}
                        <td>{u.name}</td>
                        <td>{u.role}</td>
                        <td>{u.salary}</td>
                        <td>
                            <button onClick={ () => handleDelete(u.id)}>Delete</button>
                        </td>
                        <td>
                            <button onClick={()=> handleUpdate(u)}>Update</button>
                        </td>
                    </tr>
                ))
            }
            </tbody>

        </table>
        </center>
      
    </div>
  )
}

export default ShowTable

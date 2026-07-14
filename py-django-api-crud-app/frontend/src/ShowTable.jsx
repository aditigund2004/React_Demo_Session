import React, { useEffect, useState } from 'react'
import { showAllEmployee } from './services'

const ShowTable = () => {
    const [emp , setEmp] = useState([])

    const loadEmp = ()=>{
        showAllEmployee().then( (res) =>{
            setEmp(res.data)
        })
        .catch( (err) =>{
            console.log(err)
        })
    }
    useEffect( ()=>{
        loadEmp()
    }, [])
  return (
    <div>
        <center>
            <h2>Employee Data</h2>
        <table border ='3'> 
            <thead>
                <tr>
                    <th>id</th>
                    <th>name</th>
                    <th>role</th>
                    <th>salary</th>
                </tr>
            </thead>
            <tbody>          
                  {
                emp.map( (u)=> (
                    <tr key = {u.id}>
                        <td>{u.id}</td>
                        <td>{u.name}</td>
                        <td>{u.role}</td>
                        <td>{u.salary}</td>
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

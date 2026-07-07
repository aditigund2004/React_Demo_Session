import React, { useEffect, useState } from 'react'
import { api } from '../service'

const ShowData = () => {
    const [user, setUser]=useState([])

    const loadData = ()=>{
        api.get('/users')
        .then( (res) => {
            setUser(res.data)
        })
        
    }
    useEffect ( () =>{
        loadData();
    }, [])
  return (
    <div>
        <center>
            <h3>Student Data</h3>
            <table border = '3'>
                <thead>
                    <tr>
                        <th>PRN</th>
                        <th>Name</th>
                        <th>email</th>
                     
                    </tr>
                </thead>
                {
                    user.map( (u) =>(
                        <tr key={u.id}>
                            <td>{u.prn}</td>
                            <td>{u.name}</td>
                            <td>{u.email}</td>
                           
                        </tr>
                    ))
                }
            </table>
        </center>
      
    </div>
  )
}

export default ShowData

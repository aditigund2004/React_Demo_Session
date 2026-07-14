import React, { useEffect, useState } from 'react'
import { api } from '../service'

function ShowEmp({ refdata , updateData}) {

    const [user, setUser]= useState([])

    // const [update, setUpdate] = useState([])



    const loadData =()=>{
        api.get(`users`)
        .then( (res)=>{
            setUser(res.data)

        })
    }

    useEffect( ()=>{
        loadData();
    },[refdata])

    const handleDelete =(id)=>{
        api.delete(`users/${id}`)
        .then( (res) =>{
            loadData();
        })
    }

    const handleUpdate =(up)=>{
        updateData(up)

    }
  return (
    <div>
        <center>
            <table border = '2'>
                <thead>
                <tr>
                    <th>Name</th>
                    <th>Email</th>
                    <th>Role</th>
                    <th>Password</th >
                    <th>Action</th >
                </tr>
                </thead>
                <tbody>
                    {
                        user.map( (u) =>( 
                            <tr key={u.id}>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.role}</td>
                                <td>{u.password}</td>
                                <td>
                                    <button onClick={() =>handleDelete(u.id)}>Delete</button>
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

export default ShowEmp

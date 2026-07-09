import React, { useEffect, useState } from 'react'
import { api } from '../service'

const Data = () => {
    const [data , setData] = useState({name : ""})
  
    const [user, setUser] = useState([])

    const loadData = ()=>{
        api.get(`users`)
        .then( (res) =>{
            console.log(res.data)
            setUser(res.data)
        })
        .catch((err) =>{
            console.log(err)
        } )
    }

    useEffect( () =>{
        loadData()
    },[])


    const handleDelete =(id) =>{
        api.delete(`users/${id}`)
        .then( (res) =>{
            console.log(res.data)
            loadData()
        })
        .catch( (err) =>{
            console.log(err)
        })
    }


    const handleInput = (e)=>{
        const {name, value} = e.target
        setData( {...data, [name]: value})
    }

    const handleSubmit =(e)=>{
        e.preventDefault()

        api.post(`users`, data)
        .then( (res) =>{
            loadData()
        })
    }

    const handleUpdate =()=>{
        setData
    }
  return (
    <div>
        <form onSubmit={handleSubmit}>
            name: <input type="text" name = 'name' value = {data.name}  onChange={handleInput} required/>

            <button>add</button>
        </form>


    <table border='3'>
        <thead>
            <tr>
                <th>Name</th>
                <th>Action</th>
            </tr>
        </thead>
        {
            <tbody>
                {
                    user.map ((u) =>(

                        <tr key={u.id}>
                        <td>{u.name}</td>
                        <td>
                            <button onClick={ () => handleDelete (u.id)}>Delete</button>
                        </td>

                        <td>
                            <button  onClick={()=> handleUpdate(u)}>Update</button>
                        </td>
                        </tr>

                    ))
                }
            </tbody>
        }
    </table>
      
    </div>
  )
}

export default Data

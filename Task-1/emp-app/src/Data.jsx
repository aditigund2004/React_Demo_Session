import React, { useEffect, useState } from 'react'
import { api } from './service'

const Data = () => {

    const [user, setUser] = useState([])
    
      const [from, setForm] = useState({name : "", email: "", password: "" , role: "",})

  

    const loadData = ()=>{
        api.get('users')
        .then( (res) =>{
            setUser(res.data)

        })

    }

    useEffect( () =>{
        loadData();
    } ,[])

    const handleDelete = (id) =>{
        api.delete(`users/${id}`)
        .then( (res)=>{
            loadData()
        })
    }


    const handleSubmit = async(e)=>{
        e.preventDefault()
    
        // console.log(from)
    
        await api.post(`users`,from)
        .then( (res)=>{
            setForm(res.data)
            loadData()
        })

        setForm({name : "", email: "", password: "" , role: "",})
        
      }
    
      const handleInput = (e)=>{
        const{name, value} = e.target 
        setForm({...from, [name]: value})

      }
  return (
    <div>
        <center>

            <form onSubmit={handleSubmit}>
          name : <input type="text" name = 'name' value = {from.name} onChange={handleInput} required /><br></br> <br></br>
          Email : <input type="text" name = 'email' value = {from.email} onChange={handleInput} required /><br></br> <br></br>
          password : <input type="text" name = 'password' value = {from.password} onChange={handleInput} required /><br></br> <br></br>
          role : <input type="text" name = 'role' value = {from.role} onChange={handleInput} required /><br></br> <br></br>

          <button>Add</button>
        </form>



            <h1>Details</h1>
            <table border = '3'>
                <thead>
                    <tr>
                        <th>NAme</th>
                        <th>Eamil</th>
                        <th>passsword</th>
                        <th>role</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        user.map( (u) => (
                            <tr keey={u.id}>
                                <td>{u.name}</td>
                                <td>{u.email}</td>
                                <td>{u.password}</td>
                                <td>{u.role}</td>

                                <td>
                                    <button onClick={( )=> handleDelete(u.id)}>Delete</button>
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

export default Data

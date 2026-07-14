import React, { useEffect, useState } from 'react'
import { api } from './service'

const Data = () => {

    const [emp, setEmp] = useState([])
    const [from, setForm] = useState({empName : "", Department: "", salary: "" , email: "",})

    const [update, setUpdate] = useState(null)

    const loadData = ()=>{
        api.get(`emp`)
        .then( (res) =>{
            setEmp(res.data)
        })
    }

    useEffect( () =>{
        loadData();
    } ,[])

    const handleDelete = (id) =>{
        api.delete(`emp/${id}`)
        .then( (res)=>{
            loadData()
        })
    }

    const handleSubmit = async(e)=>{
        e.preventDefault()


        if (update){
            await api.put(`emp/${update.id}`, from)
            setUpdate(null)
            loadData()

        }else{
        await api.post(`emp`,from)
            loadData()
    }
        setForm({empName : "", Department: "", salary: "" , email: "",})
      }
    
      const handleInput = (e)=>{
        const{name, value} = e.target 
        setForm({...from, [name]: value})
      }

      const handleUpdate =(dt)=>{
        setUpdate(dt)
        setForm(dt)
      }

  return (
    <div>
        <center>
            <h2>Employee Detail</h2>

        <form onSubmit={handleSubmit}>
          name : <input type="text" name = 'empName' value = {from.empName} onChange={handleInput} required /><br></br> <br></br>
          Department : <input type="text" name = 'Department' value = {from.Department} onChange={handleInput} required /><br></br> <br></br>
          salary : <input type="text" name = 'salary' value = {from.salary} onChange={handleInput} required /><br></br> <br></br>
          email : <input type="text" name = 'email' value = {from.email} onChange={handleInput} required /><br></br> <br></br>

        <button>Add</button>
        </form>

            <h2>Details</h2>
            <table border = '3'>
                <thead>
                    <tr>
                        <th>Name</th>
                        <th>department</th>
                        <th>salary</th>
                        <th>email</th>
                        <th>Action</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        emp.map( (u) => (
                            <tr key={u.id}>
                                <td>{u.empName}</td>
                                <td>{u.Department}</td>
                                <td>{u.salary}</td>
                                <td>{u.email}</td>

                                <td>
                                    <button onClick={( )=> handleDelete(u.id)}>Delete</button>
                                </td>
                                <td>
                                    <button onClick={() => handleUpdate(u)}>Update</button>
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

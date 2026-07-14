import React, { useEffect, useState } from 'react'
import { api } from './service'

const ShowData = () => {

  const [emp, setEmp] = useState([])

  const [from, setForm] = useState( {empName :"", Department: "", salary: "", email: ""})

  const loadData=()=>{
    api.get(`emp`)
    .then( (res) => {
      setEmp(res.data)
    })
    
  }

  useEffect( ()=>{
    loadData();
  },[])

  const handleSubmit= (e)=>{
    e.preventDefault()
    api.post(`emp`,from)
    .then( (res)=>{
      loadData();
    })
  }

  const handleInput = (e)=>{
    const {name, value} =e.target
    setForm({...from, [name]: value})
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

                                
                            </tr>
                        ))
                    }
                </tbody>
            </table>
             
        </center>
      
    </div>
  )
}

export default ShowData

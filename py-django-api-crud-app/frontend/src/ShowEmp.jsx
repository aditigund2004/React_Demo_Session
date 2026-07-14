import axios from 'axios'
import React, { useState } from 'react'

const ShowEmp = () => {
    const [data, setData] = useState({id: "", name: "", role: "", salary:""})

    const handleSubmit = (e)=>{
        e.preventDefault()

        axios.post(`employee`, data)
        .then( (res) =>{
            
        })
    }

    const handleInput =(e)=>{
        const{name, value} = e.target 
        setData({...data, [name]: value})
    }

  return (
    <div>
        <center>
            <h2>Add Employee Data</h2>
            <form onSubmit={handleSubmit}>
                id : <input type="text" name="id" value={data.id} onChange={handleInput} required/> <br></br> <br></br>
                name : <input type="text" name="name" value={data.name} onChange={handleInput} required/> <br></br> <br></br>
                role : <input type="text" name="role" value={data.role} onChange={handleInput} required/> <br></br> <br></br>
                id : <input type="text" name="salary" value={data.salary} onChange={handleInput} required/> <br></br> <br></br>

                <button>Add Employee</button>

            </form>
        </center>
      
    </div>
  )
}

export default ShowEmp

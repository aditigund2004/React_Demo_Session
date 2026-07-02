import axios from 'axios'
import React, { useState } from 'react'

const EmpDetail = ({setRef, refTrigger}) => {

    const [form, setfrom]  =useState({'empid': '', 'name': '', 'role': '', 'salary' : ''})

    const handlechange = (e) => {
        const {name, value} = e.target
        setfrom({...form, [name]:value})
    }

    const handleSubmit = (e)=>{
        e.preventDefault();

        axios.post('http://localhost:3000/employees', form)
        .then( ()=> { 
            // console.log("data saved")
            (setRef(refTrigger + 1)
    )})


        setfrom({'empid': '', 'name': '', 'role': '', 'salary' : ''})
    }
  return (
    <div>
        <h2>Add Employee Details</h2>
        <form onSubmit={handleSubmit}>

            Id : <input type='text' name = 'empid' value={form.empid} onChange={handlechange} required /><br></br><br></br>
            Name : <input type='text' name = 'name' value={form.name} onChange={handlechange} required /><br></br><br></br>
            Role : <input type='text' name = 'role' value={form.role} onChange={handlechange} required /><br></br><br></br>
            salary : <input type='text' name = 'salary' value={form.salary} onChange={handlechange} required /><br></br><br></br>
            <button type='submit'> Add Employees</button>
        </form>
    </div>
  )
}

export default EmpDetail

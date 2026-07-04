import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { addAllEmployee, updateAllEmployee  } from '../serives'

const EmployeeForm = ({setRef, accepEmp}) => {

    const [form, setfrom]  =useState({'empid': '', 'name': '', 'role': '', 'salary' : ''})

    const handlechange = (e) => {
        const {name, value} = e.target
        setfrom({...form, [name]:value})
    }

    useEffect ( ()=>{
        if (accepEmp){
            setfrom(accepEmp)
        }
    },[accepEmp])

    const handleSubmit = async (e)=>{
        e.preventDefault();
        console.log(form)

        // sendData(form)
        setRef(form)

        // send data -> state variable (from)
        // axios.post('http://localhost:3000/employees', form)
        // .then( (res) =>{
        //     console.log("res", res.data)
        // })
        // .catch( (err) =>{
        //     console.log("error", err)
        // })



        if (accepEmp) {
            let update = await updateAllEmployee(accepEmp.id, form)
            console.log("after update", update)
        }
        else{
           let add = await addAllEmployee(form)
           console.log("added", add)
        
    }
    setRef(1)
    setfrom({'empid': '', 'name': '', 'role': '', 'salary' : ''})
}

    
  return (
    <div>
         <h2> {accepEmp ? 'Update Employee Details': 'Add Employee Details'}</h2>
        <form onSubmit={handleSubmit}>

            Id : <input type='text' name = 'empid' value={form.empid} onChange={handlechange} required /><br></br><br></br>
            Name : <input type='text' name = 'name' value={form.name} onChange={handlechange} required /><br></br><br></br>
            Role : <input type='text' name = 'role' value={form.role} onChange={handlechange} required /><br></br><br></br>
            salary : <input type='text' name = 'salary' value={form.salary} onChange={handlechange} required /><br></br><br></br>

            <button type='submit'> {accepEmp ? 'Update Employees':'Add Employees'}</button>
        </form>
      
    </div>
  )
}

export default EmployeeForm

/* 
A Promise is an object that represents the eventual result of an asynchronous operation.

A promise has three states:

// let promise = promise

properties ->
    state and result

Pending – Initial state, operation is still running.
Fulfilled – Operation completed successfully.
Rejected – Operation failed.


What is async?

The async keyword is used before a function to make it return a Promise automatically.


What is await?

The await keyword pauses the execution of an async function until a Promise settles.

*/
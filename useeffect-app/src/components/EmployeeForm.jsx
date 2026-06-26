import React, { useEffect, useState } from 'react'
import { addEmployee, updateEmployee } from '../services'

const EmployeeForm = ({added, updateThisEmp}) => {
    let [form, setFrom] = useState({id:'', name: '', salary: ''})

    // all filed will filter when click on the update button by using props
    useEffect ( ()=>{
        if(updateThisEmp){
            // after updating the value add in the form
            console.log(updateThisEmp)
            setFrom(updateThisEmp)
        }
    }, [updateThisEmp])

    const HandleChange = (e)=>{
        let {name, value} = e.target

        setFrom({...form, [name]:value})
    }

    const handleSubmit = (e) => {
        e.preventDefault();

        // from service file to add employe the method addEmployee defind and passed the satae variable
        // to add the employee details
        // addEmployee(form);

        // then
        if(updateThisEmp) {
            updateEmployee(form)

        }else{
            addEmployee(form);

        }

        // props from child called as function
        added(1)
       
        setFrom({id:'', name: '', salary: ''})

    }
  return (
    <div>
    <center>
        <form onSubmit={handleSubmit}>
            <h1> {updateThisEmp ? "Update Employee Details": "Add Employee Details"}</h1>

            Id : <input type='text' name='id' value={form.id} onChange={HandleChange} required/><br></br> <br></br>
            Name : <input type='text' name='name' value={form.name} onChange={HandleChange} required/><br></br> <br></br>
            Salary : <input type='text' name='salary' value={form.salary} onChange={HandleChange} required/><br></br> <br></br>

            <button type='submit'>{updateThisEmp ? "update Employee" : "Add Employee"}</button>
            <br></br><br></br>
        </form>
        
    </center>
      
    </div>
  )
}

export default EmployeeForm

import React, { useEffect, useState } from 'react'

const EmployeeFrom = ({sendDataToParent, up}) => {
    const [data, setData] = useState({id: "", name: "", salary: "", dept: ""})

    const handleForm = (e) => {
        e.preventDefault()
        // props name then state variable name
        // call -> This sends form data back to App
        sendDataToParent(data)
        setData({id: "", name: "", salary: "", dept: ""})

        // after click update the data should also get update 
        if (up){
            
        }
    }

    useEffect( ()=>{
        if(up){
            setData(up)
        }
    }, [up])


    const handleInput = (e) => {
        const {name, value} = e.target
        setData({...data, [name]: value})
    }
  return (
    <div>
        <h2>{up ? "Update Employee Details" : "Add Employee Details"}</h2>
        <form onSubmit={handleForm}>
            Id : <input type='text' name = 'id' value = {data.id} onChange={handleInput} required/><br></br><br></br>
            Name : <input type='text' name = 'name' value = {data.name} onChange={handleInput} required/><br></br><br></br>
            Salary : <input type='text' name = 'salary' value = {data.salary} onChange={handleInput} required/><br></br><br></br>
            Department : <input type='text' name = 'dept' value = {data.dept} onChange={handleInput} required/><br></br><br></br>

            <button type='submit'>{ up ? "Update Employee" :"Add Employee"} </button>
            <br></br>
            <br></br>
        </form>
      
    </div>
  )
}

export default EmployeeFrom










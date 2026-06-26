import React, { useState } from 'react'

const EmployeeFrom = ({sendDataToParent}) => {
    const [data, setData] = useState({id: "", name: "", salary: "", dept: ""})

    const handleForm = (e) => {
        e.preventDefault()

        // props name then state variable name
        sendDataToParent(data)

        setData({id: "", name: "", salary: "", dept: ""})
    }

    const handleInput = (e) => {
        const {name, value} = e.target

        setData({...data, [name]: value})
    }
  return (
    <div>
        <form onSubmit={handleForm}>
            Id : <input type='text' name = 'id' value = {data.id} onChange={handleInput} required/><br></br><br></br>
            Name : <input type='text' name = 'name' value = {data.name} onChange={handleInput} required/><br></br><br></br>
            Id : <input type='text' name = 'salary' value = {data.salary} onChange={handleInput} required/><br></br><br></br>
            Id : <input type='text' name = 'dept' value = {data.dept} onChange={handleInput} required/><br></br><br></br>

            <button type='submit'> Add Employee Details</button>
            <br></br>
            <br></br>
        </form>
      
    </div>
  )
}

export default EmployeeFrom

import React, { useState } from 'react'

const FacultyDashboard = () => {
    const [stud, setStud] = useState( {prn : "", name : "", email : "", m1: "", m2: "", m3: "", m4: "", total: "", percentag: ""})

    const handleSubmit = (e)=>{
        e.preventDefault()

       


    }

    const handleInput = (e)=>{
        const {name, value} = e.target 
        setStud({...stud, [name]: value})
    }
  return (
    <div>
        <center>

            <h2>Student Form</h2>
            <form onSubmit={handleSubmit}>
            PRN : <input  type='text' name='prn' value={stud.prn} onChange={handleInput} required/><br></br><br></br>
            Name : <input  type='text' name='name' value={stud.name} onChange={handleInput} required/><br></br><br></br>
            Email : <input  type='text' name='email' value={stud.email} onChange={handleInput} required/><br></br><br></br>
            M1 : <input  type='text' name='m1' value={stud.m1} onChange={handleInput} required/><br></br><br></br>
            M2 : <input  type='text' name='m2' value={stud.m2} onChange={handleInput} required/><br></br><br></br>
            M3 : <input  type='text' name='m3' value={stud.m3} onChange={handleInput} required/><br></br><br></br>
            M4 : <input  type='text' name='m4' value={stud.m4} onChange={handleInput} required/><br></br><br></br>
            Total : <input  type='text' name='total' value={stud.total} onChange={handleInput} required/><br></br><br></br>
            Percentag : <input  type='text' name='percentag' value={stud.percentag} onChange={handleInput} required/><br></br><br></br>

            <button type='submit'> Add</button>
            </form>
            
        </center>
      
    </div>
  )
}

export default FacultyDashboard

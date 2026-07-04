import axios from 'axios'
import React, { useState } from 'react'

const StudentRegister = ({sendData}) => {
    const [form, setForm] = useState({"eid": "", "uname": ""})

    const handleSubmit = (e)=>{
        e.preventDefault()
        sendData(form)
        console.log(form)
        setForm({"eid": "", "uname": ""})

        axios.post('http://localhost:3000/Students', form)
        .then( (res) =>{
            console.log(res.data)
            sendData(res.data)
    })
    .catch( (err)=>{
        console.log(err)
    })
    }

    const handleInput = (e)=>{
        const {name, value} = e.target
        setForm({...form, [name]: value})
    }
  return (
    <div>
        <center>
            <h2>Studen Data</h2>
            <form onSubmit={handleSubmit}>
                Id : <input  type='text' name= 'eid' value={form.eid} onChange={handleInput} required/><br></br><br></br>
                Name : <input  type='text' name= 'uname' value={form.uname} onChange={handleInput} required/><br></br><br></br>

                <button type='submit'> Add</button>
            </form>
        </center>
      
    </div>
  )
}

export default StudentRegister

import React, { useState } from 'react'
import { api } from '../service'

const AddEmp = ({sendData}) => {
    const [form, setForm] = useState({name: "", email : "", role: "", password: ""})

    const onSubmit = (e)=>{
        e.preventDefault()

        api.post(`users`, form)
        .then( (res)=>{
            setForm(res.data)
            sendData(res.data)
        })
    }

    const handleInput =(e)=>{
        const {name, value} = e.target
        setForm({...form, [name]: value})

    }
  return (
    <div>
        <center>
            <form onSubmit={onSubmit}>
                name: <input type="text" name="name" value= {form.name} onChange={handleInput} required/><br></br><br></br>
                email: <input type="text" name="email" value= {form.email} onChange={handleInput} required/><br></br><br></br>
                role: <input type="text" name="role" value= {form.role} onChange={handleInput} required/><br></br><br></br>
                password: <input type="text" name="password" value= {form.password} onChange={handleInput} required/><br></br><br></br>

                <button type='submit'> Add</button>
            </form>
        </center>
      
    </div>
  )
}

export default AddEmp

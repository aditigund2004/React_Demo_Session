import React, { useState } from 'react'

const Login = () => {

    const [form, setForm] = useState( { email : "", password : ""})

    const [role, setRole] = useState(null)

    const [show, setShow] = useState(null)

    const handleSubmit =(e)=>
    {
        e.preventDefault()

        let all = api.get('/users').then((res) => res.data)

        all.map( (u) => u.email === form.email && u.password === form.password);
        setRole(u.role)
        setShow(true)

        console.log(u.role)
       setForm({email : "", password: ""})
    }

    const handleInput =(e)=>{
        const {name, value} = e.target
        setForm({...form, [name]:value})

    }
  return (
    <div>
        <center>
            <h2>User Login</h2>
            <form onSubmit={handleSubmit}>            
           
            Email : <input type='text' name='name' value={form.name} onChange={handleInput} required/><br></br><br></br>
            Password : <input type='text' name='password' value={form.name} onChange={handleInput} required/><br></br><br></br>

            <button type='submit'>Add</button>
            </form>

        </center>
      
    </div>
  )
}

export default Login

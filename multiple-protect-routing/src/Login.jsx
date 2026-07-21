import React, { useState } from 'react'

const Login = () => {
    const [form, setForm] = useState({em: "", pass:""})

    const user = [
         
          {  "name":"ram",
            "email":"ram",
            "password": "123",
            "role":"admin",
       
          },
          {

          
            "name":"sham",
            "email":"shma",
            "password": "123",
            "role":"admin"
        }
    ]

  return (
    <div>
      
      <h2>Login here..</h2>
      <form onSubmit={handleSubmit}>
        Email: <input type="text" name = 'em' value={form.em} onChange={handleInput} required/><br></br><br></br>
        password: <input type="text" name = 'pass' value={form.pass} onChange={handleInput} required/><br></br><br></br>

        <button>Login</button>
      </form>
    </div>
  )
}

export default Login

import React, { useState } from 'react'

const Login = () => {
    const [login , setLogin] = useState( { email: "",  password: ""})

    const [shoe, setShow] = useState(null)

    const [role, setRole] = useState(null)

    const handleSubmit = async(e)=>{
        e.preventDefault()
    
        await api.post(`users`,login)
    
        setShow(true)
       
    
        setForm({email: "", password: ""})
        
      }
    
      const handleInput = (e)=>{
        const{name, value} = e.target 
        setLogin({...login, [name]: value})
    
    
      }
    

  return (
    <div>
        <center>
            <h2>Login Page</h2>
         <form onSubmit={handleSubmit}>
          Email : <input type="text" name = 'email' value = {login.email} onChange={handleInput} required /><br></br> <br></br>
          password : <input type="text" name = 'password' value = {login.password} onChange={handleInput} required /><br></br> <br></br>

          <button>Add</button>
        </form>

        </center>
      
    </div>
  )
}

export default Login
